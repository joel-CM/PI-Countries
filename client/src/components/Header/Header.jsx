import React, { useEffect } from "react";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// actions
import {
  filterByContinent,
  filterByActivity,
  orderByName,
  getActivities,
} from "../../actions/actions";

// components
import Search from "../Search/Search";

const Header = () => {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleFilter = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

  const handleFilterActivity = (e) => {
    dispatch(filterByActivity(e.target.value));
  };

  const handleOrder = (e) => {
    dispatch(orderByName(e.target.value));
  };

  return (
    <div className={s.header}>
      <div className={s.headeTitle}>
        <h1 className={s.title}> PI Countries - Henry </h1>
      </div>
      <div className={s.back}>
        <div className={s.backHome}>
          <Link className={s.linkBack} to="/">
            BACK
          </Link>
        </div>
      </div>

      {/* ------------ operaciones --------------------------  */}

      <div className={s.operations}>
        {/* ---------- select filtro por actividades ---w------- */}

        <div className={s.filterActivity}>
          <span>Activities: </span>
          <select onClick={handleFilterActivity}>
            <option value="none">NONE</option>
            {actividades?.map((a) => (
              <option key={a.id} value={a.nombre}>
                {a.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* ---------- select filtro por continente ---------- */}

        <div className={s.filters}>
          <span>Continents: </span>
          <select onClick={handleFilter}>
            <option value="none">NONE</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
          </select>
        </div>

        {/* ---------- select ordenamiento por nombres y poblacion ---------- */}

        <div className={s.sorts}>
          <span>Order by: </span>
          <select onChange={handleOrder}>
            <option value="none">NONE</option>
            <option value="name_asc">name - ASC</option>
            <option value="name_des">name - DES</option>
            <option value="population_asc">population - ASC</option>
            <option value="population_des">population - DES</option>
          </select>
        </div>
        <div className={s.createLink}>
          <Link className={s.link} to="/create">
            Create Activity
          </Link>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
