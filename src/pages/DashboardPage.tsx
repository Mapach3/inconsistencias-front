import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import { ClientRoutes } from "../config/enums";
import Layout from "../layout/Layout";

const DashboardPage: React.FC = () => {
  return (
    <Route exact path={ClientRoutes.DASHBOARD}>
      <Layout>
        <Home />
      </Layout>
    </Route>
  );
};

export default DashboardPage;
