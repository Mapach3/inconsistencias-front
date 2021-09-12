import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ClientRoutes } from "../config/enums";
import DashboardPage from "../pages/DashboardPage";
import FilesPage from "../pages/FilesPage";
import ImportPage from "../pages/ImportPage";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*Public routes not requiring Login*/}
        <Route exact path={ClientRoutes.DASHBOARD}>
          <DashboardPage />
        </Route>

        <Route exact path={ClientRoutes.IMPORTAR}>
          <ImportPage />
        </Route>

        <Route exact path={ClientRoutes.ARCHIVOS}>
          <FilesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
