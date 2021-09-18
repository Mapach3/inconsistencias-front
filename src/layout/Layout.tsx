import React from "react";
import { Button, Layout as AntLayout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { SideMenu } from "./SideMenu";
import { useHistory } from "react-router";
import { ClientRoutes } from "../config/enums";

const Layout: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <AntLayout hasSider style={{ minHeight: "100vh" }}>
      <SideMenu />
      <AntLayout>
        <Header className="header">
          <div
            style={{ color: "white", fontSize: "1.3rem", position: "absolute" }}
          >
            Inconsistencias App
          </div>
          <div style={{ textAlign: "end", color: "white" }}>
            <span style={{ margin: "1rem" }}>
              {localStorage.getItem("InconsistenciasAPP.Usuario") || ""}
            </span>
            {!localStorage.getItem("InconsistenciasAPP.JWT") && (
              <Button
                type="primary"
                onClick={() => history.push(ClientRoutes.LOGIN)}
              >
                Ingresar
              </Button>
            )}
            {localStorage.getItem("InconsistenciasAPP.JWT") && (
              <Button
                type="primary"
                onClick={() => history.push(ClientRoutes.LOGOUT)}
              >
                Salir
              </Button>
            )}
          </div>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
