import { Row, Typography } from "antd";
import React from "react";
import Layout from "../layout/Layout";

const Logout: React.FC = () => {
  return (
    <Layout>
      <Row justify="center">
        <Typography.Text>Sesión cerrada exitosamente</Typography.Text>
      </Row>
    </Layout>
  );
};

export default Logout;
