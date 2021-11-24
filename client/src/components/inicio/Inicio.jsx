import React from 'react'
// import { connect } from "react-redux"
// actions
// import { getCountries } from "../../actions/actions"
// react-router component
import { Link } from "react-router-dom"

const Inicio = ({ countries, getCountries }) => {
    return (
        <div>
            <h3>inicio</h3>
            <Link to="/home">Home</Link>
        </div>
    )
}

export default Inicio
