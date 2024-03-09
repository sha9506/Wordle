import React, { useState } from 'react';
import './App.css';
import Landing from './page/Landing/Landing';
import Game from './page/Game/Game';
import Result from './page/Result/Result';

const App =()=>{

  const [pageNumber, setPageNumber] = useState(2);
  const[playerName, setPlayerName]= useState();
  const[levelName, setLevelName]=useState(
    [
      "Easy", "Medium", "Hard"
    ]
  )
  const [selectedLevel, setSelectedLevel]=useState('');

 
  return(<div>
      {
        pageNumber===1?<Landing 
        playerName={playerName} 
        setPlayerName={setPlayerName} 
        setPageNumber={setPageNumber}
        levelName={levelName}
        setLevelName={setLevelName}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}/> : null
      }
      {
        pageNumber===2? <Game 
        playerName={playerName} 
        selectedLevel={selectedLevel}
        /> : null
      }
      {
        pageNumber===3? <Result/> : null
      }

  </div>)
}

export default App;
