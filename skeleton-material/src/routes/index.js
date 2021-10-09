import React from "react";
import { Redirect, Switch } from "react-router-dom";

import AuthRoutes from "routes/AuthRoutes";
import UnAuthRoutes from "routes/UnAuthRoutes";
import Login from "components/session/Login";
import DashboardLayout from "components/layouts/DashboardLayout";

const Routes = () => {
  return (
    <Switch>
      <AuthRoutes path={"/dashboard"} component={DashboardLayout} />
      <UnAuthRoutes path={"/login"} component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;
