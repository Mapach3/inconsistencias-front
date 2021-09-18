import {
  DownloadOutlined,
  FileDoneOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  List,
  message,
  Modal,
  Table,
  Tooltip,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import FileService from "../../api/files/FileService";
import { TipoProcesamiento, TipoProcesamientoLabel } from "../../config/enums";
import { Archivo } from "../../models/models";

const FilesGrid: React.FC = () => {
  const [archivos, setArchivos] = useState<Archivo[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<Archivo>();
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      let usuario = localStorage.getItem("InconsistenciasAPP.Usuario");
      if (usuario) {
        setLoading(true);
        const response = await FileService.getFiles(usuario);
        setArchivos(response.response as Archivo[]);
        setLoading(false);
      }
    };
    try {
      fetchFiles();
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const columns = [
    { title: "ID", dataIndex: "idInsercion" },
    { title: "Nombre", dataIndex: "nombreArchivo" },
    {
      title: "Fecha de subida",
      dataIndex: "fechaAlta",
      align: "center" as "center",
      render: (cell: any) => moment(cell).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Acciones",
      align: "center" as "center",
      render: (cell: any, row: Archivo) => (
        <>
          <Tooltip title="Ver reglas">
            <Button
              icon={<FileSearchOutlined />}
              style={{ marginRight: "0.8rem" }}
              onClick={() => {
                setSelectedFile(row);
                setOpen(true);
                setModalTitle(`Reglas de ${row.nombreArchivo}`);
                setModalType("RULE");
              }}
            />
          </Tooltip>
          <Tooltip title="Ver resultado">
            <Button
              icon={<FileDoneOutlined />}
              style={{ marginRight: "0.8rem" }}
              onClick={() => {
                setSelectedFile(row);
                setOpen(true);
                setModalTitle(`Resultado de ${row.nombreArchivo}`);
                setModalType("RESULT");
              }}
            />
          </Tooltip>
          <Tooltip title="Descargar archivo">
            <Button
              icon={<DownloadOutlined />}
              onClick={() => handleFileDownload(row.idInsercion)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const handleFileDownload = async (fileId: number) => {
    const fileResponse = await FileService.getFileForDownload(fileId);
    const objectUrl: string = window.URL.createObjectURL(
      new Blob([fileResponse])
    );
    const a: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;

    a.href = objectUrl;
    a.download = "Reglas.txt";
    document.body.appendChild(a);
    a.click();

    console.log(fileResponse);
  };

  return (
    <>
      <Card title="Mis Archivos">
        <Table
          bordered
          columns={columns}
          dataSource={archivos}
          loading={loading}
          rowKey="idInsercion"
        />
      </Card>
      <Modal
        title={modalTitle}
        visible={open}
        footer={null}
        onCancel={() => {
          setOpen(false);
          setSelectedFile(undefined);
          setModalTitle("");
          setModalType("");
        }}
      >
        {modalType === "RULE" ? (
          <List
            rowKey="item"
            dataSource={selectedFile?.reglasArchivo.reglas}
            bordered
            renderItem={(item) => <List.Item>{`> ${item}`}</List.Item>}
          />
        ) : (
          <>
            {selectedFile?.resultadoArchivo.map((item: any) => (
              <>
                {item.tipoProcesamiento !== "Todas" && (
                  <>
                    <Typography.Title level={4} style={{ marginTop: "1rem" }}>
                      {
                        TipoProcesamientoLabel[
                          item.tipoProcesamiento as TipoProcesamiento
                        ]
                      }
                    </Typography.Title>
                    <List
                      bordered
                      dataSource={item.resultado}
                      locale={{
                        emptyText: (
                          <span style={{ fontWeight: "bold" }}>
                            No se detectaron inconsistencias de este tipo
                          </span>
                        ),
                      }}
                      renderItem={(item) => (
                        <List.Item>{`> ${item}`}</List.Item>
                      )}
                    />
                  </>
                )}
              </>
            ))}
          </>
        )}
      </Modal>
    </>
  );
};

export default FilesGrid;
