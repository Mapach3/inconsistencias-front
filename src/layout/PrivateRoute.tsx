import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ClientRoutes } from "../config/enums";

interface Props {
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ path, children }) => {
  return (
    (localStorage.getItem("InconsistenciasAPP.JWT") && (
      <Route exact path={path}>
        {children}
      </Route>
    )) || <Redirect to={ClientRoutes.LOGIN} />
  );
};

export default PrivateRoute;
