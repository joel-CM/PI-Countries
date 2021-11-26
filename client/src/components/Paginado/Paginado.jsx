import React from 'react'
import s from "./Paginado.module.css"
import { useDispatch, useSelector } from "react-redux"
// actions
import { pagLeft, pagRight } from "../../actions/actions"
// icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Paginado = () => {
    const dispatch = useDispatch()
    const inicio = useSelector((state) => state.pagInicio)
    const final = useSelector((state) => state.pagFinal)
    const countries = useSelector((state) => state.countries)

    return (
        <div className={s.paginado}>
            <button
                disabled={inicio < 1 && true}
                onClick={() => inicio > 0 && dispatch(pagLeft())}>
                <AiOutlineArrowLeft />
            </button>
            <button
                disabled={countries.length - 1 < final && true}
                onClick={() => countries.length - 1 > final && dispatch(pagRight())}>
                <AiOutlineArrowRight />
            </button>
        </div >
    )
}

export default Paginado
