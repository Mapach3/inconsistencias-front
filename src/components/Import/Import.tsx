import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, message, Spin, Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import React, { useState } from "react";
import FileService from "../../api/files/FileService";

interface ImportProps {}

const Import: React.FC<ImportProps> = () => {
  const [file, setFile] = useState<UploadFile>();
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async (info: UploadChangeParam) => {
    debugger;
    if (info.file.status === "removed") {
      setFile(undefined);
    } else {
      setFile(info.file);
    }
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file as unknown as File);
      const response = await FileService.uploadRuleFile(formData);
      console.log(response);
      setIsUploading(false);
    } catch (error: any) {
      if (error.message) {
        message.error(error.message);
      }
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <>
      <Card title="Importar reglas">
        <div style={{ float: "left" }}>
          <Upload
            beforeUpload={() => false}
            fileList={file ? [file] : []}
            onChange={handleChange}
            accept=".txt"
          >
            <Button icon={<UploadOutlined />}>Click para subir archivo</Button>
          </Upload>
          <div style={{ marginTop: "1rem" }}>
            {" "}
            {isUploading && <Spin tip="Cargando archivo..." />}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Import;
