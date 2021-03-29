import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import IntroBackground from "./Components/Intro-Background.jsx";
import Featured from "./Components/Featured.jsx";
import Menu from "./Components/Menu.jsx";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin">
            <h1>You are in admin</h1>
          </Route>

          <Route path="/">
            <Navbar />
            <IntroBackground />
            <Featured />
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
