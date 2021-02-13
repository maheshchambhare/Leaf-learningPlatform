import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Html from "./html5";
import Css from "./css3";
import Js from "./javascript";
import "./home.css";

export default function navbar() {
  return (
    <div>
      <Router>
        <header>
          <h1 className="logo">Leaf</h1>
          <nav>
            <ul className="nav-links">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="links">Home</li>
              </Link>
              <Link to="/html" style={{ textDecoration: "none" }}>
                <li className="links">HTML5</li>
              </Link>
              <Link to="/css" style={{ textDecoration: "none" }}>
                <li className="links">CSS3</li>
              </Link>
              <Link to="/js" style={{ textDecoration: "none" }}>
                <li className="links">JavaScript</li>
              </Link>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/html">
            <Html />
          </Route>
          <Route path="/css">
            <Css />
          </Route>
          <Route path="/js">
            <Js />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
