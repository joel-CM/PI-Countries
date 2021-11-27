import React, { useEffect, useState } from 'react'
import s from "./CardDetail.module.css"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CardDetail = () => {
    const { id } = useParams()

    const [state, setState] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/api/countries/${id}`)
            .then(res => res.json())
            .then(c => {
                setState(c)
            })
    }, [id])

    return (
        <div className={s.cardDetail}>
            <div className={s.btnBack}>
                <Link to="/home">BACK</Link>
            </div>
            <div className={s.datailContainer}>
                <div className={s.cardImage}>
                    <img src={state?.imagen} alt={state.nombre} />
                </div>
                <div className={s.cardInfo}>
                    <h4 className={s.title}>{state?.nombre}</h4>
                    <p>{state?.continente}</p>
                    <p>{state?.id}</p>
                    <p>{state?.capital}</p>
                    <p>{state?.subregion}</p>
                    <p>{state?.area}</p>
                    <p>{state?.poblacion}</p>
                    <p>{state.Actividades?.map(a => a.nombre)}</p>
                </div>
            </div>
        </div>
    )
}

export default CardDetail
