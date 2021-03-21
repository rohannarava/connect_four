import React from 'react'
import './OptionBox.css'

function OptionBox(props) {
    return(
        <div className={`optionBox ${props.class}`}>
            <img className="optionImg"  src={props.imgSrc} alt={props.imgAlt}></img>
            <span className="optionName">{props.name}</span>
        </div>
    )
}

export default OptionBox