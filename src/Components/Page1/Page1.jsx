import React from 'react'
import OptionBox from '../OptionBox/OptionBox'
import './Page1.css'

function Page1(props) {
    return(
        <div className="pageOne" >
            <div className="pageOneHeading">
                <div className="title"> Connect Four! </div>
                <div className="caption"> Play with other players around the world. </div>
            </div>
            <div className="main">
                <div className="play">
                    <img className="playIcon" src="play.svg" alt="play"></img>
                    <div>PLAY</div>   
                </div>
                <div className="optionsContainer">
                    <div className="flexRow">
                        <OptionBox class="one" name="Custom Game" imgSrc="one.png" imgAlt="one"></OptionBox>
                        <OptionBox class="two" name="Two Players" imgSrc="two.png" imgAlt="two"></OptionBox>
                    </div>
                    <div className="flexRow">
                        <OptionBox class="online" name="Game Online" imgSrc="online.png" imgAlt="online"></OptionBox>
                        <OptionBox class="training" name="Training Game" imgSrc="training.png" imgAlt="training"></OptionBox>
                    </div>
                </div>
            </div>
            <div className="fourInarow">
                <img className="fourInarowImg" src="4inarow.png" alt="4inarow"></img>
            </div>
            <div className="footer">
                <div className="footerMessage"> © 2020 </div>
            </div>
            <div className="pageOneCircle"></div>
            <div className="pageOneCircleTwo"></div>
        </div>
    )
}

export default Page1