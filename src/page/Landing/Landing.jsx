import React, { useState } from "react";
import './Landing.css';


const Landing= ({setPlayerName, playerName , setPageNumber})=>
{
    const[errorMessage, setErrorMessage] = useState();

    const handleStart=()=>
    {
        if(playerName){
            console.log(playerName);
            setErrorMessage(null);
        }
        else{
            setErrorMessage("Please enter username");
        }
             
    }

    return(<div>
        <div className="title">WORDLE</div>
        <div className="input-item">
             <input className="username" name="username" onChange={(event)=>{ setPlayerName(event.target.value)}}/>
             <div className="info-text">Enter the User Name here</div>
        </div>
        <div className="levels">
            <div className="level-item">Easy</div>
            <div  className="level-item" >Medium</div>
            <div  className="level-item" >Hard</div>
        </div>
        <div className="start-item">
             <button className="start" onClick={handleStart}>START THE GAME</button>
        </div>
        { errorMessage? <div className="start-condition" >{errorMessage}</div> : null}
        
       

    </div>)
}

export default Landing;