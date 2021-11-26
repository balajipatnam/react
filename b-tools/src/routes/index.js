import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import AuthRoutes from 'routes/AuthRoutes';
import UnAuthRoutes from 'routes/UnAuthRoutes';
import DashboardLayout from 'components/layouts/DashboardLayout';
import NotFound from 'components/layouts/404';
import LazyPages from 'utils/lazy-load-pages';

const Routes = () => {
  return (
    <Switch>
      <AuthRoutes path={'/dashboard'} component={DashboardLayout} />
      {/* <AuthRoutes path={'/dashboard'} component={DashboardLayout} /> */}
      {LazyPages.session.map((pages, index) => {
        return (
          <UnAuthRoutes
            exact
            key={'session-' + index}
            path={pages.path}
            component={pages.component}
          />
        );
      })}
      <Redirect exact to="/login" from="/" />
      <Route path="**" component={NotFound} />
    </Switch>
  );
};

export default Routes;
