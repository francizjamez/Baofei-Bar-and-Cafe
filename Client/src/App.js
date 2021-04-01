import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Styles/Main.css";
import Navbar from "./Components/Navbar.jsx";
import Introduction from "./Components/Introduction/Introduction.jsx";
import Featured from "./Components/Featured/Featured.jsx";
import Login from "./Components/Login/Login.jsx";
import Admin from "./Components/Admin/Admin";
import Menu from "./Components/Menu/Menu.jsx";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/menu">
            <h1>You are in menu</h1>
          </Route>
          <Route path="/">
            <Navbar />
            <Introduction />
            <Featured />
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
