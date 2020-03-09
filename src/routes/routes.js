import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/Home";
import PortfolioPage from "../pages/Portfolio";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/" component={PortfolioPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
