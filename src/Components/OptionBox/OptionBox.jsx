import React from 'react'
import { withRouter } from 'react-router-dom';
import './OptionBox.css'

function OptionBox(props) {
    const { name, imgAlt, imgSrc, history } = props
    return(
        <div className={`optionBox ${props.class}`} onClick={name==="Two Players"?()=>{history.push('/settings')}:()=>{alert("Coming Soon")}}>
            <img className="optionImg"  src={imgSrc} alt={imgAlt}></img>
            <span className="optionName">{name}</span>
        </div>
    )
}

export default withRouter(OptionBox)