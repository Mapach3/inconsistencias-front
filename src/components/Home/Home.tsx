import { Card, Typography } from "antd";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Card title="Dashboard">
        <div style={{ textAlign: "center" }}>
          <Typography.Title level={4}>
            Bienvenido al tester de Inconsistencias para reglas de Sistemas
            Basados en Conocimiento
          </Typography.Title>
        </div>
      </Card>
    </>
  );
};

export default Home;
