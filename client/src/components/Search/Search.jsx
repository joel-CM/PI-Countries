import React from 'react'
import s from "./Search.module.css"
import { useDispatch } from "react-redux"
// actions
import { getByQuery } from "../../actions/actions"

const Search = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(getByQuery(e.target.value))
    }

    return (
        <form className={s.search}>
            <input type="text" onChange={handleChange} placeholder="Buscar..." />
        </form>
    )
}

export default Search
