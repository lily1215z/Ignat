import React from 'react'
import {AffairType} from "./HW2";
import affair from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // +need to fix any типизировать одно дело
    deleteAffairCallback: (_id: number)=> void // +need to fix any
}

function Affair(props: AffairPropsType) {
    //нужно из пропсов достать функцию и передать айди  чтоб оно удалилось
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}   // +need to fix

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            <span className={affair.name}>{props.affair.name}</span>
        </div>
    )
}

export default Affair
