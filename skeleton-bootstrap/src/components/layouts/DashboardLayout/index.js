import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router";

const Dashboard = lazy(() => import("components/main/Dashboard"));

function DashboardLayout(props) {
  useEffect(init, []);

  function init() {}
  return (
    <div className="app-wrapper">
      <div className="app-main app-main-sidebar-static">
        <div className="app-content">
          <div className="app-content--inner">
            <div className="app-content--inner__wrapper">
              <Suspense
                fallback={
                  <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                    {/* <div className="w-50 mx-auto">Please wait...</div> */}
                  </div>
                }
              >
                <Switch>
                  <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
              </Suspense>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
