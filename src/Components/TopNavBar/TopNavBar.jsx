import React from 'react'
import { withRouter } from 'react-router-dom';
import './TopNavBar.css'

function TopNavBar(props) {
    const { history, prevPagePath } = props
    return(
        <div className="topNavBar">
            <div className="navImg" onClick={()=>{history.push(prevPagePath)}}>
                <img src="back.svg" alt="back" ></img>
            </div>
            <div> Two Players Game </div> 
        </div>
    )
}

export default withRouter(TopNavBar)