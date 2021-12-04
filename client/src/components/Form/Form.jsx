import React, { useState, useEffect } from "react";
import s from "./Form.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// actions
import { getCountriesName } from "../../actions/actions";

const Form = () => {
  const dispatch = useDispatch();
  const countriesNames = useSelector((state) => state.countriesNames);

  const [state, setState] = useState({
    countriesNames: [],
    nombre: "",
    dificultad: 1,
    duracion: 10,
    temporada: "primavera",
  });

  useEffect(() => {
    dispatch(getCountriesName());
  }, [dispatch]);

  const handleACtivity = (e) => {
    setState(() => {
      if (e.target.name !== "countriesNames") {
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
      } else if (
        e.target.value === "none" &&
        e.target.name === "countriesNames"
      ) {
        return {
          ...state,
          [e.target.name]: [],
        };
      } else {
        return {
          ...state,
          [e.target.name]: [...state.countriesNames, e.target.value],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/activity", state).then((res) => {
      alert("activity created");
    });
  };

  return (
    <div className={s.form}>
      <div className={s.backHome}>
        <Link className={s.link} to="/home">
          BACK
        </Link>
      </div>

      <form className={s.formContainer} onSubmit={handleSubmit}>
        <div className={s.nombre}>
          <input
            type="text"
            maxLength={30}
            name="nombre"
            placeholder="Name..."
            onChange={handleACtivity}
            value={state.nombre}
            required
          />
        </div>
        <div className={s.dificultad}>
          <input
            type="number"
            name="dificultad"
            placeholder="Difficulty (between 1 - 5)"
            onChange={handleACtivity}
            value={state.difucultad}
            min={1}
            max={5}
            required
          />
        </div>
        <div className={s.duracion}>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            name="duracion"
            placeholder="Duration..."
            onChange={handleACtivity}
            value={state.duracion}
            required
          />
        </div>
        <div className={s.temporada}>
          <label htmlFor="season">Select Season</label>
          <select id="season" name="temporada" onChange={handleACtivity}>
            <option value="primavera">primavera</option>
            <option value="verano">verano</option>
            <option value="otoño">otoño</option>
            <option value="invierno">invierno</option>
          </select>
        </div>
        <div className={s.idCountries}>
          <label htmlFor="country">Select countries</label>
          <select
            id="country"
            name="countriesNames"
            onChange={handleACtivity}
            required
          >
            <option value="none">NONE</option>
            {countriesNames?.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className={s.btnSubmit}>
          <input type="submit" value="CREATE" />
        </div>
      </form>
    </div>
  );
};

export default Form;
