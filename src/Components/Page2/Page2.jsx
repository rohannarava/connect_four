import React from 'react'
import SettingCard from '../SettingCard/SettingCard'
import TopNavBar from '../TopNavBar/TopNavBar'
import Modal from '../Modal/Modal'
import './Page2.css'

const gamesCountOptions = [3,5,7,9]
const whoStartsOptions = ["Alternative turn", "Looser first", "Winner first", "Always player 01", "Always player 02"]

class Page2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: true,
            playerOne: "Player 1",
            playerTwo: "Player 2",
            gamesCount: gamesCountOptions[1],
            whoStarts: whoStartsOptions[0]
        }
    }
    render(){
        const { playerOne, playerTwo, gamesCount, whoStarts, showModal } = this.state
        return(
            <div className="pageTwo">
                <TopNavBar></TopNavBar>
                <div className="main">
                    <div className="cardsContainer">
                        <SettingCard class="avatar01" imgSrc="avatar01.png" imgAlt="avatar01" label="Player 01" value={playerOne} isPlayer={true} ></SettingCard>
                        <SettingCard class="avatar02" imgSrc="avatar02.png" imgAlt="avatar02" label="Player 02" value={playerTwo} isPlayer={true} ></SettingCard>
                        <SettingCard class="winner" imgSrc="winner.png" imgAlt="winner" label="Number of games" value={`${gamesCount} Games`} handleOnClick={()=>{}} ></SettingCard>
                        <SettingCard class="run" imgSrc="run.png" imgAlt="run" label="Who starts" value={whoStarts} handleOnClick={()=>{}} ></SettingCard>
                    </div>
                    <hr></hr>
                    <div className="startContainer">
                        <button className="start"> Start Game </button>
                    </div>
                    {showModal && <Modal></Modal>   }
                </div>
            </div>
        )
    }
}

export default Page2