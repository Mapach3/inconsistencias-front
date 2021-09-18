import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  List,
  message,
  Row,
  Select,
  Spin,
  Typography,
  Upload,
} from "antd";
import Title from "antd/lib/typography/Title";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import React, { useState } from "react";
import FileService from "../../api/files/FileService";
import { FileTest } from "../../models/models";

interface ImportProps {}

const Import: React.FC<ImportProps> = () => {
  const [file, setFile] = useState<UploadFile>();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [opcion, setOpcion] = useState(0);
  const [fileTest, setFileTest] = useState<FileTest>();

  const handleChange = async (info: UploadChangeParam) => {
    setIsUploading(true);
    if (info.file.status === "removed") {
      setFile(undefined);
      setFileTest(undefined);
    } else {
      setFile(info.file);
    }
    setIsUploading(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("file", file as unknown as File);
      const response = await FileService.uploadRuleFile(formData, opcion);
      setFileTest(response.response as FileTest);
      setIsUploading(false);
    } catch (error: any) {
      if (error.message) {
        message.error(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title="Importar reglas">
      <Row gutter={12}>
        <div style={{ float: "left" }}>
          <Upload
            beforeUpload={() => false}
            fileList={file ? [file] : []}
            onChange={handleChange}
            accept=".txt"
          >
            <Button icon={<UploadOutlined />}>Click para subir archivo</Button>
          </Upload>
          {isUploading && <Spin tip="Cargando archivo..." />}
        </div>
      </Row>
      {file && (
        <Row gutter={12} style={{ marginTop: "1rem" }}>
          <Col span={5} lg={4} xs={12}>
            <Typography>
              Selecciona el tipo de inconsistencias a buscar:
            </Typography>
          </Col>
          <Col span={4} lg={4} xs={12}>
            <Select
              placeholder="Selecciona un valor.."
              style={{ width: "100%" }}
              onChange={(value: number) => setOpcion(value)}
              showSearch
              optionFilterProp="children"
            >
              <Select.Option value={1}>Reglas Redundantes</Select.Option>
              <Select.Option value={2}>Reglas Conflictivas</Select.Option>
              <Select.Option value={3}>Reglas Incluidas en Otras</Select.Option>
              <Select.Option value={4}>
                Condiciones Si Innecesarias
              </Select.Option>
              <Select.Option value={5}>Todas</Select.Option>
            </Select>
          </Col>
          <Col span={6} lg={3} xs={12}>
            <Button
              style={{ width: "50%" }}
              type="primary"
              loading={isSubmitting}
              disabled={isSubmitting || opcion === 0}
              onClick={handleSubmit}
            >
              Buscar
            </Button>
          </Col>
        </Row>
      )}
      {fileTest && (
        <>
          <div>
            <Title type="success" style={{ marginTop: "1rem" }}>
              ¡Éxito!
            </Title>
            <Title type="success" level={4}>
              El archivo fue importado con éxito
            </Title>
            <Title level={4}>Listado de Reglas analizadas:</Title>
            <List
              grid={{ column: 3 }}
              bordered
              itemLayout="vertical"
              dataSource={fileTest.reglas}
              renderItem={(item) => <List.Item>{`> ${item}`}</List.Item>}
            />

            <Title level={4} style={{ paddingTop: "1rem" }}>
              Resultado del análisis:{" "}
            </Title>
            {fileTest.resultado.length ? (
              <List
                itemLayout="vertical"
                grid={{ column: 2 }}
                bordered
                dataSource={fileTest.resultado}
                renderItem={(item) => <List.Item>{`> ${item}`}</List.Item>}
              />
            ) : (
              "No se encontraron inconsistencias en el listado analizado."
            )}
          </div>
          <div>
            <Button
              style={{ marginTop: "1rem" }}
              type="primary"
              onClick={() => {
                setFile(undefined);
                setFileTest(undefined);
              }}
            >
              Realizar otra prueba
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default Import;
