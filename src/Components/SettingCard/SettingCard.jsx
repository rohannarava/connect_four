import React from 'react'
import './SettingCard.css'

function SettingCard(props) {
    const handleOnChange = (e) =>{
        console.log(e.target.value)
        props.handleOnChange(e.target.value)
    }
    return(
        <div className={`settingCard ${props.class}`}>
            <div className="badge">
                <img className="settingImg" src={props.imgSrc} alt={props.imgAlt}></img>
            </div>
            <div className="inputContainer">
                <label> {props.label} </label>
                {props.isPlayer ? 
                    <input className={props.class} value={props.value} onChange={handleOnChange}></input>
                    :
                    <div className={`nonPlayer ${props.class}`} onClick={props.handleOnClick()}> {props.value} </div>
                }
            </div>
            <hr className="settingCardHr"></hr>
        </div>
    )
}

export default SettingCard