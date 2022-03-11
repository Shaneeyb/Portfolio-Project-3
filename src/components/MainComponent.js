import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import NavbarComponent from "./NavbarComponent";
import RecentWork from "./RecentWorkComponent";
import Skills from "./SkillsComponent";



function Main() {
  return (
    <div>
      <div>    
        <NavbarComponent />
        <Home />
        <RecentWork />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default Main;
