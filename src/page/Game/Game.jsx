import React, { useState } from "react";
import './Game.css';
import profile from '../Assets/profile.png';
import WordGuess from "./WordGuess";

const Game =({playerName, selectedLevel})=>
{

    const[gameWords, setGameWord]=useState(
        [
            {
                mode : "Easy",
                wordList: ['Clean', 'Bread', 'Sweet']
            },
            {
                mode : "Medium",
                wordList : ['Ankle', 'Adapt', 'Issue']
            },
            {
                mode : "Hard",
                wordList : ['Awful', 'Audio', 'Allot']
            }
        ]
    )
    {gameWords.filter(item => item.mode===selectedLevel).map((filteredItem)=>
        {
            {filteredItem.wordList.map((i)=>
             {
                i
            })}
        })}

    
  

    return(<div>
       <div className="game-main">
        <div className="wordle-box">
            <div className="wordle-head">{playerName.toUpperCase()}'S WORDLE</div>
            <div className="date">Jan 12, 2022</div>
            <div className="letters"> 
                <WordGuess /> 
                <WordGuess/>
                <WordGuess/>
                <WordGuess/>
                <WordGuess/>
                <WordGuess/>
            </div>
            <div className="submit">Submit</div>
        </div>
        <div className="side-bar">
            <div className="head-item"> 
                <img src={profile} alt='hello'/>
                <div className="playername">@{playerName}</div>
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