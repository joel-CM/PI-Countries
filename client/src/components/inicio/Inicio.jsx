import React from "react";
import s from "./Inicio.module.css";
import { NavLink } from "react-router-dom";

const Inicio = ({ countries, getCountries }) => {
  return (
    <div className={s.container}>
      <button className={s.btn}>
        <NavLink className={s.link} to="/home">
          HOME!
        </NavLink>
      </button>
    </div>
  );
};

export default Inicio;
