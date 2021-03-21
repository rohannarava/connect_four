import React from 'react'
import './PlayerCard.css'

function PlayerCard(props) {
    return(
        <div className={`playerCard ${props.class}`}>
            <div className="badge">
                <img className="settingImg" src={props.imgSrc} alt={props.imgAlt}></img>
            </div>
            <div className="">
            </div>
        </div>
    )
}

export default PlayerCard