import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Contact from "./Contact";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Contact">
          <Navbar />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/Menu">
          <Navbar />
          <Menu />
          <Footer />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Body />
          <Reviews />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
