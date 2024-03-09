import React from "react";
import './Game.css';
import profile from '../Assets/profile.png';
import WordGuess from "./WordGuess";

const Game =({playerName, selectedLevel})=>
{
    return(<div>
       <div className="game-main">
        <div className="wordle-box">
            <div className="wordle-head">RIYUZAKI's WORDLE</div>
            <div className="date">Jan 12, 2022</div>
            <div className="letters"> <WordGuess/> </div>
            <div className="submit">Submit</div>
        </div>
        <div className="side-bar">
            <div className="head-item"> 
                <img src={profile} alt='hello'/>
                <div className="playername">{playerName}</div>
            </div>
            <div className="guess">Guess distribution</div>
            <div className="list"> 
               
            </div>
            <div className="mode">Mode: <div className="mode-select">{selectedLevel}</div> </div>
        </div>
       </div>
    </div>
    )
}

export default Game;