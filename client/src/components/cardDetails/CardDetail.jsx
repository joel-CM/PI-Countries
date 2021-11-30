import React, { useEffect, useState } from 'react'
import s from "./CardDetail.module.css"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
// components
import CardActivity from '../CardACtivity/CardActivity'

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
            <div className={s.detailContainer}>
                <div className={s.cardInfo}>
                    <div className={s.overlay}></div>

                    <img src={state?.imagen} alt={state.nombre} />

                    <div className={s.cardInfoContainer}>
                        <h4 className={s.title}><b>Nombre:</b> {state?.nombre}</h4>
                        <p><strong>Continente:</strong> {state?.continente}</p>
                        <p><strong>Código: </strong>{state?.id}</p>
                        <p><strong>Capital:</strong> {state?.capital}</p>
                        <p><strong>Subregion:</strong> {state?.subregion}</p>
                        <p><strong>Área:</strong> {state?.area}</p>
                        <p><strong>Población:</strong> {state?.poblacion}</p>
                    </div>
                </div>
            </div>
            <div className={s.detailActivity}>
                <div className={s.activityContainer}>
                    {
                        state.Actividades?.map(a => (
                            <CardActivity activity={a} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CardDetail
