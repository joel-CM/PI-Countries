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
        id
        nombre: "",
        dificultad: 0,
        duracion: "",
        temporada: "",
    });

    useEffect(() => {
        dispatch(getCountriesName())
    }, [])

    const handleACtivity = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("se envió")
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
