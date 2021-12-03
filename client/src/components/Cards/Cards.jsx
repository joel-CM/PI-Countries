import React, { useEffect, useState } from "react";
import s from "./Cards.module.css";
import load from "../../img/load.gif";
import notFound from "../../img/not-found.png";

// component Card
import Card from "../Card/Card";
import { connect, useSelector } from "react-redux";

// actions
import { getCountries } from "../../actions/actions";

const Cards = ({ countries, getCountries }) => {
  const [state, setState] = useState([]);
  const pagInicio = useSelector((state) => state.pagInicio);
  const pagFinal = useSelector((state) => state.pagFinal);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  useEffect(() => {
    setState(countries?.slice(pagInicio, pagFinal));
  }, [pagInicio, pagFinal, countries]);

  return (
    <div className={s.cards}>
      {state[0]?.message ? (
        <img
          style={{ width: "200px", height: "200px" }}
          src={notFound}
          alt="not-found..."
        />
      ) : null}

      {state.length > 0 && !state[0]?.message ? (
        state?.map((c) => (
          <Card
            key={c?.id}
            id={c?.id}
            imagen={c?.imagen}
            nombre={c?.nombre}
            continente={c?.continente}
            poblacion={c?.poblacion}
          />
        ))
      ) : !state.length && !state[0]?.message ? (
        <img
          style={{ width: "100px", height: "100px", margin: "20px" }}
          src={load}
          alt="loading..."
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries,
});

export default connect(mapStateToProps, { getCountries })(Cards);
