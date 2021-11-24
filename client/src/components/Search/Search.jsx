import React, { useState } from 'react'
import s from "./Search.module.css"
import { useDispatch } from "react-redux"
// actions
import { getByQuery } from "../../actions/actions"

const Search = () => {
    const [state, setState] = useState("")
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByQuery(state))
    }

    return (
        <form onSubmit={handleSubmit} className={s.search}>
            <input type="text" onChange={handleChange} placeholder="Buscar..." />
            <input type="submit" value="buscar" />
        </form>
    )
}

export default Search
