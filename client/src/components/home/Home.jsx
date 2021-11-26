import React, { useEffect } from 'react'
import s from "./Home.module.css"
import { useDispatch } from "react-redux"
// actions
import { getCountries } from "../../actions/actions"
// components
import Header from "../Header/Header"
import Cards from "../Cards/Cards"
import Paginado from "../Paginado/Paginado"

// react-router component

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={s.container}>
            <Header />
            <Paginado />
            <Cards />
            <Paginado />
        </div>
    )
}

export default Home
