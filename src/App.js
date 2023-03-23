import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
     <Nav />
      <Banner />
      <Skills />
     <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
