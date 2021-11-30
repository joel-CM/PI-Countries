import React from 'react'
import s from "./CardActivity.module.css"

const CardActivity = ({ activity }) => {
    return (
        <div className={s.container}>
            <h4 className={s.title}>Actividad: {activity.nombre}</h4>
            <p>Dificultad: {activity.dificultad}</p>
            <p>Duración: {activity.duracion}</p>
            <p>Temporada: {activity.temporada}</p>
        </div>
    )
}

export default CardActivity
