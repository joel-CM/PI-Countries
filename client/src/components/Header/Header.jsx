import React from 'react'
import s from "./Header.module.css"
import { useDispatch } from "react-redux"
// actions
import { filterByContinent, orderByName } from "../../actions/actions"
// components
import Search from "../Search/Search"

const Header = () => {
    const dispatch = useDispatch()

    const handleFilter = (e) => {
        dispatch(filterByContinent(e.target.value))
    }

    const handleOrder = (e) => {
        dispatch(orderByName(e.target.value))
    }

    return (
        <div className={s.header}>
            <div className={s.headeTitle}>
                <h1 className={s.title}> API Countries - Henry </h1>
            </div>
            <div className={s.back}>
                <div className={s.backHome}>
                    <span>BACK</span>
                </div>
            </div>
            <div className={s.operations}>
                <div className={s.filters}>
                    <span>Filters: </span>
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
                <div className={s.sorts}>
                    <span>Sorts: </span>
                    <select onChange={handleOrder}>
                        <option value="none">NONE</option>
                        <option value="name_asc">name - ASC</option>
                        <option value="name_des">name - DES</option>
                        <option value="population_asc">population - ASC</option>
                        <option value="population_des">populations - DES</option>
                    </select>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Header
