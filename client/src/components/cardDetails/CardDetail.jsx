import React, { useEffect, useState } from "react";
import s from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// components
import CardActivity from "../CardACtivity/CardActivity";

const CardDetail = () => {
  const { id } = useParams();

  const [state, setState] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/api/countries/${id}`)
      .then((res) => res.json())
      .then((c) => {
        setState(c);
      });
  }, [id]);

  return (
    <div className={s.cardDetail}>
      <div className={s.btnBack}>
        <button>
          <Link className={s.link} to="/home">
            BACK
          </Link>
        </button>
      </div>
      <div className={s.detailContainer}>
        <div className={s.cardInfo}>
          <div className={s.overlay}></div>

          <img src={state?.imagen} alt={state.nombre} />

          <div className={s.cardInfoContainer}>
            <h4 className={s.title}>
              <strong>Name:</strong> {state?.nombre}
            </h4>
            <p>
              <strong>Continent:</strong> {state?.continente}
            </p>
            <p>
              <strong>Code: </strong>
              {state?.id}
            </p>
            <p>
              <strong>Capital:</strong> {state?.capital}
            </p>
            <p>
              <strong>Subregion:</strong> {state?.subregion}
            </p>
            <p>
              <strong>Area:</strong> {state?.area} km²
            </p>
            <p>
              <strong>Population:</strong> {state?.poblacion}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- activities ---------- */}
      <div className={s.detailActivity}>
        <h3>Activities</h3>

        {/* -------------- cards activities --------------- */}
        {state.Actividades?.length > 0 ? (
          <div className={s.activityContainer}>
            {state.Actividades?.map((a) => (
              <CardActivity activity={a} />
            ))}
          </div>
        ) : (
          <strong> No activities . . . </strong>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
