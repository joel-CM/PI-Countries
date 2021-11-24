import React, { useEffect, useState } from 'react'
import s from "./Cards.module.css"
// component Card
import Card from "../Card/Card"
import { connect, useDispatch, useSelector } from "react-redux"
// actions
import { getCountries } from "../../actions/actions"

const Cards = ({ countries, getCountries }) => {
    const [state, setState] = useState([])
    const pagInicio = useSelector((state) => state.pagInicio)
    const pagFinal = useSelector((state) => state.pagFinal)

    useEffect(() => {
        getCountries()
    }, [getCountries])

    useEffect(() => {
        setState(countries?.slice(pagInicio, pagFinal))
    }, [pagInicio, pagFinal, countries])

    return (
        <div className={s.cards}>
            {
                state?.map(c => <Card
                    key={c?.id}
                    imagen={c?.imagen}
                    nombre={c?.nombre}
                    continente={c?.continente}
                    poblacion={c?.poblacion}
                />)
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.countries,
})

export default connect(mapStateToProps, { getCountries })(Cards)
