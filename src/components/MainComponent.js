import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import NavbarComponent from "./NavbarComponent";
import RecentWork from "./RecentWorkComponent";



function Main() {
  return (
    <div>
      <div>    
        <NavbarComponent />
        <Home />
        <RecentWork />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default Main;
