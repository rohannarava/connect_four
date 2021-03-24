import React, { useState, useRef } from 'react'
import './SettingCard.css'

function SettingCard(props) {
    const [image, setImage] = useState(props.imgSrc)
    const inputEl = useRef(null)
    
    const handleOnChange = (e) =>{
        props.handleOnChange(e.target.value)
    }
    function onChangeImage (e){
        if (e.target.files && e.target.files[0] && e.target.files[0].type.startsWith('image/')) {
            const img = URL.createObjectURL(e.target.files[0])
            sessionStorage.setItem(`${props.class}`, img)
            setImage(img)
        }
    }
    return(
        <div className={`settingCard ${props.class}`}>
            <div className={props.isPlayer?"badge pointer":"badge"} onClick={props.isPlayer?()=>{inputEl.current.click()}:()=>{}}>
                <img className="settingImg" src={image} alt={props.imgAlt}></img>
            </div>
            <div className="inputContainer">
                <label> {props.label} </label>
                {props.isPlayer ? 
                    <input className={props.class} value={props.value} onChange={handleOnChange}></input>
                    :
                    <div className={`nonPlayer ${props.class}`} onClick={props.handleOnClick()}> {props.value} </div>
                }
            </div>
            <div className="avatarImage">
                <input ref={inputEl} type="file" id="img" name="img" accept="image/*" onChange={(e)=>onChangeImage(e)} />
            </div>
            <hr className="settingCardHr"></hr>
        </div>
    )
}

export default SettingCard