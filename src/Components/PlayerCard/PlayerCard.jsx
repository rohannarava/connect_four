import React from 'react'
import './PlayerCard.css'

function PlayerCard(props) {
    const drag =  (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }
      
    return(
        <div className={`playerCard ${props.class}`}>
            <div className={props.current?"currentBadge":""}>
                <div className="badge">
                    <img className="settingImg" src={props.imgSrc} alt={props.imgAlt} draggable={props.current?"true":"false"} onDrag={drag}></img>
                </div>
            </div>
            <div className="playerName">
                <label> {props.label} </label>
                <div className={`values name ${props.class}`}> {props.name} </div>
            </div>
            <div className="playerScore">
                <label> Score </label>
                <div className={`values score ${props.class}`}> {`0${props.score}`} </div>
            </div>
        </div>
    )
}

export default PlayerCard