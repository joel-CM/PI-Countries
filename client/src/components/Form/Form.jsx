import React, { useState, useEffect } from "react";
import s from "./Form.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
// actions
import { getCountriesName } from "../../actions/actions"

const Form = () => {
    const dispatch = useDispatch()
    const countriesNames = useSelector((state) => state.countriesNames)

    const [state, setState] = useState({
        countriesNames: [],
        nombre: "",
        dificultad: 0,
        duracion: 0,
        temporada: "",
    });

    useEffect(() => {
        dispatch(getCountriesName())
    }, [])

    const handleACtivity = (e) => {
        setState(() => {
            if (e.target.name !== "countriesNames") {
                return {
                    ...state,
                    [e.target.name]: e.target.value,
                }
            } else {
                return {
                    ...state,
                    [e.target.name]: [...state.countriesNames, e.target.value],
                }
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/activity", state).then(res => {
            alert("actividad creada")
        })
    }

    return (
        <div className={s.form}>
            <div className={s.backHome}>
                <Link to="/home">BACK</Link>
            </div>
            <form className={s.formContainer} onSubmit={handleSubmit}>
                <div className={s.nombre}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre..."
                        onChange={handleACtivity}
                    />
                </div>
                <div className={s.dificultad}>
                    <input type="number" name="dificultad" placeholder="Dificultad..." onChange={handleACtivity} />
                </div>
                <div className={s.duracion}>
                    <input
                        type="number"
                        name="duracion"
                        placeholder="Duración..."
                        onChange={handleACtivity}
                    />
                </div>
                <div className={s.temporada}>
                    <select name="temporada" onChange={handleACtivity}>
                        <option value="primavera">primavera</option>
                        <option value="verano">verano</option>
                        <option value="otoño">otoño</option>
                        <option value="invierno">invierno</option>
                    </select>
                </div>
                <div className={s.idCountries}>
                    <select name="countriesNames" onChange={handleACtivity}>
                        <option value="none">NONE</option>
                        {
                            countriesNames?.map((c) => (
                                <option value={c}>{c}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={s.btnSubmit}>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Form;
