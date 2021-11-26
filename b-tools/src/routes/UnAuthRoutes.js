import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UnAuthRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem('authToken') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default UnAuthRoutes;
