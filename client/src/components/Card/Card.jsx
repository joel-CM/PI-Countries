import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ imagen, nombre, continente, poblacion, id }) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img className={s.img} src={imagen} alt={nombre} />
      </div>
      <div className={s.cardInfo}>
        <div className={s.cardName}>
          <Link className={s.link} to={`/detail/${id}`}>
            <h4>{nombre}</h4>
          </Link>
        </div>
        <div className={s.cardContinent}>
          <p>
            <strong>Continent: </strong>
            {continente}
          </p>
        </div>
        <div className={s.population}>
          <p>
            <strong>Population: </strong>
            {poblacion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
