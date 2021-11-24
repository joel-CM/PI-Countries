import React from 'react'
import s from "./Card.module.css"

const Card = ({ imagen, nombre, continente, poblacion }) => {
    return (
        <div className={s.card}>
            <div className={s.image}>
                <img src={imagen} alt={nombre} />
            </div>
            <div className={s.cardInfo}>
                <div className={s.cardName}>
                    <h4>{nombre}</h4>
                </div>
                <div className={s.cardContinent}>
                    <p>{continente}</p>
                </div>
                <div className={s.population}>
                    <p>{poblacion}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
