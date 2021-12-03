import React from "react";
import s from "./CardActivity.module.css";

const CardActivity = ({ activity }) => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Activity: {activity.nombre}</h4>
      <p>Difficulty: {activity.dificultad}</p>
      <p>Duration: {activity.duracion} minutos</p>
      <p>Season: {activity.temporada}</p>
    </div>
  );
};

export default CardActivity;
