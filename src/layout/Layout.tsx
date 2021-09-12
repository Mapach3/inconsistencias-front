import React from "react";
import { Layout as AntLayout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { SideMenu } from "./SideMenu";

const Layout: React.FC = ({ children }) => {
  return (
    <AntLayout hasSider style={{ minHeight: "100vh" }}>
      <SideMenu />
      <AntLayout>
        <Header className="header">
          <div style={{ color: "white", fontSize: "1.3rem" }}>
            Inconsistencias App
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
