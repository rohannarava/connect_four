import React from 'react'
import { withRouter } from 'react-router-dom';
import SettingCard from '../SettingCard/SettingCard'
import TopNavBar from '../TopNavBar/TopNavBar'
import Modal from '../Modal/Modal'
import './Page2.css'

const gamesCountOptions = ["3 Games","5 Games","7 Games","9 Games"]
const whoStartsOptions = ["Alternative turn", "Looser first", "Winner first", "Always player 01", "Always player 02"]

class Page2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showWhoModal: false,
            showGamesModal: false,
            playerOne: localStorage.getItem("player1") || "Player 1",
            playerTwo: localStorage.getItem("player2") || "Player 2",
            gamesCount: localStorage.getItem("gamesCount") || gamesCountOptions[1],
            whoStarts: localStorage.getItem("whoStarts") || whoStartsOptions[0],
        }
        this.toggleShowWhoModal = this.toggleShowWhoModal.bind(this)
        this.toggleShowGamesModal = this.toggleShowGamesModal.bind(this)
        this.onSubmitGamesModal = this.onSubmitGamesModal.bind(this)
        this.onSubmitWhoModal = this.onSubmitWhoModal.bind(this)
        this.handlePlayerOneChange = this.handlePlayerOneChange.bind(this)
        this.handlePlayerTwoChange = this.handlePlayerTwoChange.bind(this)
    }

    toggleShowWhoModal() {
        this.setState({showWhoModal: !this.state.showWhoModal})
    }

    toggleShowGamesModal() {
        this.setState({showGamesModal: !this.state.showGamesModal})
    }

    onSubmitGamesModal(value) {
        localStorage.setItem('gamesCount', value)
        this.setState({gamesCount: value, showGamesModal: false})
    }

    onSubmitWhoModal(value){
        localStorage.setItem('whoStarts', value)
        this.setState({whoStarts: value, showWhoModal: false})
    }

    handlePlayerOneChange(value){
        localStorage.setItem('player1', value)
        this.setState({playerOne: value})
    }

    handlePlayerTwoChange(value){
        localStorage.setItem('player2', value)
        this.setState({playerTwo: value})
    }

    componentDidMount(){
        const { playerOne, playerTwo, gamesCount, whoStarts } = this.state
        localStorage.setItem('gamesCount', gamesCount)
        localStorage.setItem('whoStarts', whoStarts)
        localStorage.setItem('player1', playerOne)
        localStorage.setItem('player2', playerTwo)
    }

    render(){
        const { playerOne, playerTwo, gamesCount, whoStarts, showGamesModal,  showWhoModal } = this.state
        const { history } = this.props
        const avatar1 = localStorage.getItem('avatar01') || "avatar01.png"
        const avatar2 = localStorage.getItem('avatar02') || "avatar02.png"

        return(
            <div className="pageTwo">
                <TopNavBar prevPagePath="/"></TopNavBar>
                <div className="main">
                    <div className="cardsContainer">
                        <SettingCard class="avatar01" imgSrc={avatar1} imgAlt="avatar01" label="Player 01" value={playerOne} isPlayer={true} handleOnChange={this.handlePlayerOneChange} ></SettingCard>
                        <SettingCard class="avatar02" imgSrc={avatar2} imgAlt="avatar02" label="Player 02" value={playerTwo} isPlayer={true} handleOnChange={this.handlePlayerTwoChange} ></SettingCard>
                        <SettingCard class="winner" imgSrc="winner.png" imgAlt="winner" label="Number of games" value={gamesCount} handleOnClick={()=>this.toggleShowGamesModal} ></SettingCard>
                        <SettingCard class="run" imgSrc="run.png" imgAlt="run" label="Who starts" value={whoStarts} handleOnClick={()=>this.toggleShowWhoModal} ></SettingCard>
                    </div>
                    <hr className="page2Hr"></hr>
                    <div className="startContainer">
                        <button className="start" onClick={()=>{history.push("/game")}}> Start Game </button>
                    </div>
                    {showGamesModal && <Modal title="Number of games" options={gamesCountOptions} onCancel={()=>this.toggleShowGamesModal} handleSubmit={this.onSubmitGamesModal} currValue={gamesCount} ></Modal>}
                    {showWhoModal && <Modal title="Who starts" options={whoStartsOptions} onCancel={()=>this.toggleShowWhoModal} handleSubmit={this.onSubmitWhoModal} currValue={whoStarts} ></Modal>}
                </div>
            </div>
        )
    }
}

export default withRouter(Page2)