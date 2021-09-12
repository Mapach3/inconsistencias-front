import React from "react";
import { Route } from "react-router";
import FilesGrid from "../components/Files/FilesGrid";
import { ClientRoutes } from "../config/enums";
import Layout from "../layout/Layout";

const FilesPage: React.FC = () => {
  return (
    <Route exact path={ClientRoutes.ARCHIVOS}>
      <Layout>
        <FilesGrid />
      </Layout>
    </Route>
  );
};

export default FilesPage;
