import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Styles/Main.css";
import Navbar from "./Components/Navbar.jsx";
import Introduction from "./Components/Introduction.jsx";
import Featured from "./Components/Featured.jsx";
import Menu from "./Components/Menu.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Introduction />
        <Featured />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
