import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

import Header from "components/layouts/Header";
import "./DashboardLayout.scss";
import Sidebar from "../sidebar";

const Dashboard = lazy(() => import("components/main/Dashboard"));

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function DashboardLayout(props) {
  useEffect(init, []);

  function init() {}
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, background: "#eee" }}>
          <div id="back-to-top-anchor" />
          <div className="app-wrapper">
            <div className="app-main ">
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
        </Box>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </>
  );
}

export default DashboardLayout;
