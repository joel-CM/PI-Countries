import React from "react";
import s from "./App.module.css";
import { Routes, Route } from "react-router-dom";
// components
import Inicio from "./components/inicio/Inicio";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
