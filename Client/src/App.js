import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Styles/Main.css";
import Navbar from "./Components/Navbar.jsx";
import Introduction from "./Components/Introduction.jsx";
import Featured from "./Components/Featured.jsx";
import Menu from "./Components/Menu.jsx";

function App() {
  return (
    <div>
      <Router>
<<<<<<< HEAD
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
=======
        <Navbar />
        <Introduction />
        <Featured />
        <Menu />
>>>>>>> 9fbb110b7c48fb4e63c11206cfeb14224f76fb9a
      </Router>
    </div>
  );
}

export default App;
