import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePage from "../pages/Home";
//import PortfolioPage from "../pages/Portfolio";
import NotfoundPage from "../pages/Notfound";
import SobrePage from "../pages/Sobre";
import ReposPage from "../pages/Repos";
import SkillsPage from "../pages/Skills";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/sobre" component={SobrePage} exact />
          <Route path="/repositorios" component={ReposPage} exact />
          <Route path="/skills" component={SkillsPage} exact />
          <Route component={NotfoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
