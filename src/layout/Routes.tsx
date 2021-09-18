import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { ClientRoutes } from "../config/enums";
import DashboardPage from "../pages/DashboardPage";
import FilesPage from "../pages/FilesPage";
import ImportPage from "../pages/ImportPage";
import PrivateRoute from "./PrivateRoute";

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

        <PrivateRoute path={ClientRoutes.ARCHIVOS}>
          <FilesPage />
        </PrivateRoute>

        <Route exact path={ClientRoutes.LOGIN}>
          <Login />
        </Route>

        <Route exact path={ClientRoutes.LOGOUT}>
          <Logout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
