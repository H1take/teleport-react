import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/index";

import "./App.css";

const App:React.FC = (): React.ReactElement => {
  return(
    <div className="app">
      <Navbar />
      <div className="main">
        <Header />
        <div className="separatorLine" />
        <Home />
      </div>
    </div>
  );
};

export default App;