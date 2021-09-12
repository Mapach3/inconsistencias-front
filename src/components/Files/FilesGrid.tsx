import { Card, Table } from "antd";
import React from "react";

const FilesGrid: React.FC = () => {
  const columns = [
    { title: "Nombre" },
    { title: "Fecha de subida" },
    { title: "Acciones" },
  ];
  return (
    <Card title="Mis Archivos">
      <Table bordered columns={columns} />
    </Card>
  );
};

export default FilesGrid;
