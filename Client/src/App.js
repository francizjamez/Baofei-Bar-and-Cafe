import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import IntroBackground from "./Components/Intro-Background.jsx";
import Featured from "./Components/Featured.jsx";
import Menu from "./Components/Menu.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <IntroBackground />
        <Featured />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
