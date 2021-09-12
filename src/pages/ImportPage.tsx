import React from "react";
import { Route } from "react-router-dom";
import Import from "../components/Import/Import";
import { ClientRoutes } from "../config/enums";
import Layout from "../layout/Layout";

const ImportPage: React.FC = () => {
  return (
    <Route exact path={ClientRoutes.IMPORTAR}>
      <Layout>
        <Import />
      </Layout>
    </Route>
  );
};

export default ImportPage;
