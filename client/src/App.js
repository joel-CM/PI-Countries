import React from "react";
import s from "./App.module.css";
import { Routes, Route } from "react-router-dom";
// components
import Inicio from "./components/inicio/Inicio";
import Home from "./components/home/Home";
import Form from "./components/Form/Form";
import CardDetail from "./components/cardDetails/CardDetail";

const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
};

export default App;
