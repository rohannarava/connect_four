import React from 'react'
import TopNavBar from '../TopNavBar/TopNavBar'
import PlayerCard from '../PlayerCard/PlayerCard'
import './Page3.css'

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
            current : arr,
            currentPlayer: 1,
            winner: 0,
            tourWinner: 0,
            playerOneWins: 0,
            PlayerTwoWins: 0,
            gamesCount: 0,
            currentGame: 1,
        }
        this.getHorCount = this.getHorCount.bind(this)
        this.getVerCount = this.getVerCount.bind(this)
        this.getCr1Count = this.getCr1Count.bind(this)
        this.getCr2Count = this.getCr2Count.bind(this)
        this.setElement = this.setElement.bind(this)
        this.getElements = this.getElements.bind(this)
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

    setElement = (ind, subInd) => {
        let arr = this.state.current
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

        if(max>3){
            for(let i=0;i<winArr.length;i+=2){
                arr[winArr[i]][winArr[i+1]].highlight = true
            }
        }
        this.setState({current: arr, currentPlayer:((player%2)+1), winner: max>3?player:0})
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
                                                <div className="playerOneCircle">
                                                    <img src="avatar01.png" alt="avatar01"></img>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                case 2:
                                    return(
                                        <div className="circle">
                                            <div className="innerCircle">
                                                <div className="playerTwoCircle">
                                                    <img src="avatar02.png" alt="avatar02"></img>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                default:
                                return(
                                    <div className="circle" onClick={winner===0?()=>this.setElement(ind, subInd):()=>{}}>
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

    componentDidMount(){
        const games = localStorage.getItem('gamesCount')
        this.setState({gamesCount: games})
        
    }

    render(){
        const { winner, tourWinner } = this.state
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
                            <div className="heading"> 5 Games Tournament </div>
                            {winner===0 && <div className="currentGame"> Playing Game 3 </div>}
                            {winner>0 && <div className="congrats"> Congratulation! </div>}
                            {winner>0 && <div className="message"> David, you won Game 3 </div>}
                            <PlayerCard class="avatar01" imgSrc="avatar01.png" imgAlt="avatar01" label="Player 01" value="David" ></PlayerCard>
                            <PlayerCard class="avatar02" imgSrc="avatar02.png" imgAlt="avatar02" label="Player 02" value="Maria" ></PlayerCard>
                            <hr></hr>
                            <div className="primaryButtonContainer">
                                {tourWinner===0 && winner>0 && <button className="primaryButton" onClick={()=>{}} > Next Game </button>}
                                {tourWinner===0 && winner===0 && <button className="primaryButton" onClick={()=>{}} > Undo Step </button>}
                                {tourWinner>0 && <button className="primaryButton" onClick={()=>{}} > Play Again </button>}
                            </div>
                            <div className="primaryButtonContainer">
                                <button className="secondaryButton" onClick={()=>{}} > End Tournament </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page3