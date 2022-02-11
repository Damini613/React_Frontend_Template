import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//array for keeping all routes

const routes = [];

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          //for every route(path) we need Route
          <Route key={index} path={route.path} exact={route.exact}>
            {/* component will be displayed */}
            <route.Component />
          </Route>;
        })}
      </Switch>
    </Router>
  );
};
