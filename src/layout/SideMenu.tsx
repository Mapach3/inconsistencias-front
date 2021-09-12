import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ClientRoutes } from "../config/enums";
import {
  DashboardOutlined,
  FileAddOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

export const SideMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const history = useHistory();
  const location = useLocation();

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={() => setIsCollapsed(!isCollapsed)}
    >
      <div style={{ minHeight: "4.3em" }}></div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        className="site-layout-background"
      >
        <Menu.Item
          key={ClientRoutes.DASHBOARD}
          onClick={() => history.push(ClientRoutes.DASHBOARD)}
        >
          <>
            <DashboardOutlined />
            <span>Dashboard</span>
          </>
        </Menu.Item>
        <Menu.Item
          key={ClientRoutes.IMPORTAR}
          onClick={() => history.push(ClientRoutes.IMPORTAR)}
        >
          <>
            <FileAddOutlined />
            <span>Importar</span>
          </>
        </Menu.Item>
        <Menu.Item
          key={ClientRoutes.ARCHIVOS}
          onClick={() => history.push(ClientRoutes.ARCHIVOS)}
        >
          <>
            <FileSearchOutlined />
            <span>Mis Archivos</span>
          </>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
