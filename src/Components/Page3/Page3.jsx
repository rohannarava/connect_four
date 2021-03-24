import React from 'react'
import { withRouter } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar'
import PlayerCard from '../PlayerCard/PlayerCard'
import './Page3.scss'

let arr = [];
for(let i=0;i<8;i++){
    arr.push([]);
    for(let j=0;j<8;j++){
        arr[i].push({
            value: 0,
            highlight: false
        });
    }
}

class Page3 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            current : JSON.parse(JSON.stringify(arr)),
            currentPlayer: 1,
            winner: 0,
            tourWinner: 0,
            playerOneWins: 0,
            playerTwoWins: 0,
            gamesCount: 0,
            whoStarts: null,
            currentGame: 1,
            player1: null,
            player2: null,
            moves: []
        }
        this.getHorCount = this.getHorCount.bind(this)
        this.getVerCount = this.getVerCount.bind(this)
        this.getCr1Count = this.getCr1Count.bind(this)
        this.getCr2Count = this.getCr2Count.bind(this)
        this.setElement = this.setElement.bind(this)
        this.getElements = this.getElements.bind(this)
        this.nextGame = this.nextGame.bind(this)
        
    }

    getHorCount = (ind, subInd) =>{
        const { current, currentPlayer } = this.state
        let highlightArr = []
        let i = ind
        let j = subInd
        highlightArr.push(i)
        highlightArr.push(j)
        let count = 1
        j++
        while(j<8){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                j++
                count++;
            }
            else break;
        }
        j = subInd
        j--
        while(j>=0){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                j--
                count++;
            }
            else break;
        }
        return {
            count,
            highlightArr
        }
    }

    getVerCount = (ind, subInd) =>{
        const { current, currentPlayer } = this.state
        let highlightArr = []
        let i = ind
        let j = subInd
        highlightArr.push(i)
        highlightArr.push(j)
        let count = 1
        i++
        while(i<8){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                i++
                count++;
            }
            else break;
        }
        i = ind
        i--
        while(i>=0){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                i--
                count++;
            }
            else break;
        }
        return {
            count,
            highlightArr
        }
    }

    getCr1Count = (ind, subInd) =>{
        const { current, currentPlayer } = this.state
        let highlightArr = []
        let i = ind
        let j = subInd
        highlightArr.push(i)
        highlightArr.push(j)
        let count = 1
        i++
        j++
        while(i<8 && j<8){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                i++
                j++
                count++;
            }
            else break;
        }
        i = ind
        j = subInd
        i--
        j--
        while(i>=0 && j>=0){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                i--
                j--
                count++;
            }
            else break;
        }
        return {
            count,
            highlightArr
        }
    }

    getCr2Count = (ind, subInd) =>{
        const { current, currentPlayer } = this.state
        let highlightArr = []
        let i = ind
        let j = subInd
        highlightArr.push(i)
        highlightArr.push(j)
        let count = 1
        i++
        j--
        while(i<8 && j>=0){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                i++
                j--
                count++;
            }
            else break;
        }
        i = ind
        j = subInd
        i--
        j++
        while(i>=0 && j<8){
            if(current[i][j].value===currentPlayer){
                highlightArr.push(i)
                highlightArr.push(j)
                i--
                j++
                count++;
            }
            else break;
        }
        return {
            count,
            highlightArr
        }
    }

    setElement = (index, subInd) => {
        let { gamesCount, playerOneWins, playerTwoWins, moves } = this.state
        let arr = this.state.current
        let ind
        for(let i=7;i>=0;i--){
            if(arr[i][subInd].value===0){
                ind=i;
                break;
            }
        }
        moves.push(ind, subInd)
        const player = this.state.currentPlayer
        arr[ind][subInd].value = player
        let max = 0
        let winArr = []
        let hor = this.getHorCount(ind, subInd)
        if(hor.count>max){
            max = hor.count;
            winArr = hor.highlightArr;
        }
        let ver = this.getVerCount(ind, subInd)
        if(ver.count>max){
            max = ver.count;
            winArr = ver.highlightArr;
        }
        let cr1 = this.getCr1Count(ind, subInd)
        if(cr1.count>max){
            max = cr1.count;
            winArr = cr1.highlightArr;
        }
        let cr2 = this.getCr2Count(ind, subInd)
        if(cr2.count>max){
            max = cr2.count;
            winArr = cr2.highlightArr;
        }

        let winner = 0
        let tourWinner = 0
        if(max>3){
            for(let i=0;i<winArr.length;i+=2){
                arr[winArr[i]][winArr[i+1]].highlight = true
            }
            winner = player
            if(player===1&&playerOneWins===parseInt(gamesCount/2)){
                tourWinner = player
            }else if(player===2&&playerTwoWins===parseInt(gamesCount/2)){
                tourWinner = player
            }

        }
        if(winner===1){
            playerOneWins++;
        }else if(winner===2){
            playerTwoWins++;
        }

        const audioElement = document.querySelector('audio');
        setTimeout(()=>{
            console.log('audio')
            audioElement.play()
        }, (ind*500))

        this.setState({current: arr, currentPlayer:((player%2)+1), winner: winner, tourWinner:tourWinner, playerOneWins: playerOneWins, playerTwoWins: playerTwoWins, moves: moves })
    }

    getElements = () => {
        const { current, winner } = this.state
        return(
            current.map((el, ind)=>{
                return(
                    <div className="flexRow">
                        {el.map((subEl, subInd)=>{
                            switch(subEl.value) {
                                case 1:
                                    return(
                                        <div className={subEl.highlight?"circleHighlight":"circle"}>
                                            <div className={subEl.highlight?"innerCircleHighlight":"innerCircle"}>
                                                <div className={`playerOneCircle`} style={{animationName:`example${ind}`, animationDuration:`${ind*0.5}s`}}>
                                                    <img src="avatar01.png" alt="avatar01"></img>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                case 2:
                                    return(
                                        <div className={subEl.highlight?"circleHighlight":"circle"}>
                                            <div className={subEl.highlight?"innerCircleHighlight":"innerCircle"}>
                                                <div className="playerTwoCircle" style={{animationName:`example${ind}`, animationDuration:`${ind*0.5}s`}}>
                                                    <img src="avatar02.png" alt="avatar02"></img>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                default:
                                return(
                                    <div className="circle" onClick={winner===0?()=>this.setElement(ind, subInd):()=>{}} onDrop={winner===0?()=>this.setElement(ind, subInd):()=>{}} onDragOver={this.allowDrop}>
                                        <div className="innerCircle"> </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )
            })
        )
    }

    nextGame = () => {
        let { currentGame , winner, currentPlayer, whoStarts } = this.state
        currentGame++
        let nextPlayer
        switch(whoStarts){
            case("Alternative turn"): {
                nextPlayer = currentPlayer
                break
            }
            case("Looser first"): {
                nextPlayer = (winner%2)+1
                break
            }
            case("Winner first"): {
                nextPlayer = winner
                break
            }
            case("Always player 01"): {
                nextPlayer = 1
                break
            }
            case("Always player 02"): {
                nextPlayer = 2
                break
            }
            default: {
                nextPlayer = currentPlayer
            }
        }
        this.setState({ current: JSON.parse(JSON.stringify(arr)), currentGame: currentGame, winner: 0, currentPlayer: nextPlayer, moves:[] })
    }

    playAgain = () => {
        this.setState(
            {
                current : JSON.parse(JSON.stringify(arr)),
                currentPlayer: 1,
                winner: 0,
                tourWinner: 0,
                playerOneWins: 0,
                playerTwoWins: 0,
                gamesCount: parseInt(localStorage.getItem('gamesCount')),
                whoStarts: localStorage.getItem('whoStarts'),
                currentGame: 1,
                player1: localStorage.getItem('player1'),
                player2: localStorage.getItem('player2'),
                moves: []
            }
        )
    }

    drop (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    allowDrop (ev) {
        ev.preventDefault();
    }

    undoStep = () => {
        const { current, moves, currentPlayer } = this.state
        if(moves.length===0){
            alert("No steps to undo")
        }else {
            let subInd = moves.pop()
            let ind = moves.pop()
            current[ind][subInd] = {
                value: 0,
                highlight: false
            }
            this.setState({ current:current, moves: moves, currentPlayer:((currentPlayer%2)+1) })
        }
    }

    componentDidMount(){
        const games = localStorage.getItem('gamesCount')
        const who = localStorage.getItem('whoStarts')
        const player1 = localStorage.getItem('player1')
        const player2 = localStorage.getItem('player2')
        this.setState({gamesCount: parseInt(games), whoStarts: who, player1: player1, player2: player2})
    }

    render(){
        const { winner, tourWinner, gamesCount, currentGame, player1, player2, playerOneWins, playerTwoWins, currentPlayer } = this.state
        const { history } = this.props
        return(
            <div className="pageThree">
                <TopNavBar prevPagePath="/settings"></TopNavBar>
                <div className="main">
                    <div className="boardContainer">
                        <div className="board">
                            {this.getElements()}
                        </div>
                    </div>
                    <div className="scoreCardContainer">
                        <div className="scoreCard">
                            <div className="heading"> {gamesCount} Games Tournament </div>
                            {winner===0 && <div className="currentGame"> Playing Game {currentGame} </div>}
                            {winner>0 && <div className="congrats"> Congratulation! </div>}
                            {tourWinner===0 && winner>0 && <div className="message"> {winner===1?player1:player2}, you won Game {currentGame} </div>}
                            {tourWinner>0 && <div className="message"> {tourWinner===1?player1:player2}, you won tournament </div>}
                            <PlayerCard class="avatar01" imgSrc="avatar01.png" imgAlt="avatar01" label="Player 01" name={player1} score={playerOneWins} current={currentPlayer===1 && winner===0} ></PlayerCard>
                            <PlayerCard class="avatar02" imgSrc="avatar02.png" imgAlt="avatar02" label="Player 02" name={player2} score={playerTwoWins} current={currentPlayer===2 && winner===0} ></PlayerCard>
                            <hr></hr>
                            <div className="primaryButtonContainer">
                                {tourWinner===0 && winner>0 && <button className="primaryButton" onClick={()=> this.nextGame()} > Next Game </button>}
                                {tourWinner===0 && winner===0 && <button className="primaryButton" onClick={()=> this.undoStep()} > Undo Step </button>}
                                {tourWinner>0 && <button className="primaryButton" onClick={()=>this.playAgain()} > Play Again </button>}
                            </div>
                            <div className="primaryButtonContainer">
                                <button className="secondaryButton" onClick={()=>{history.push("/")}} > End Tournament </button>
                            </div>
                        </div>
                    </div>
                </div>
                <audio src="coin-drop-1.mp3"></audio>
            </div>
        )
    }
}

export default withRouter(Page3)