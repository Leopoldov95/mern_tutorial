import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

// POST ID has to be managed here as App.js is the oarent component to both Post and Form components
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Home />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
