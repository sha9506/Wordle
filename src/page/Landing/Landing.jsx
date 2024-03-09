import React, { useState } from "react";
import './Landing.css';


const Landing= ({setPlayerName, playerName , setPageNumber, levelName, setlevelName, selectedLevel, setSelectedLevel})=>
{
  
    const handleLevel=(item)=>
    {
        setSelectedLevel(item)
    }

    const[errorMessage, setErrorMessage] = useState();

    const handleStart=()=>
    {
       
       
        if(playerName && selectedLevel){
            setPageNumber(2);
            setErrorMessage(null);
        }
        else if(playerName){
            setErrorMessage("Please select a level of difficulty");
        }
        else
        {
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
            {
                levelName.map((item)=>{
                    return( <div className={selectedLevel===item? "clicked-item":"level-item"} onClick={()=>{handleLevel(item)}}>{item}</div>)
                })
            }
        </div>
        <div className="start-item">
             <button className="start" onClick={handleStart}>START THE GAME</button>
        </div>
        { errorMessage? <div className="start-condition" >{errorMessage}</div> : null}
        
       

    </div>)
}

export default Landing;