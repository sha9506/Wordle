import React, { useState } from 'react';
import './App.css';
import Landing from './page/Landing/Landing';
import Game from './page/Game/Game';

const App =()=>{

  const [pageNumber, setPageNumber] = useState(1);
  const[playerName, setPlayerName]= useState();

 




  return(<div>
      {
        pageNumber===1?<Landing playerName={playerName} setPlayerName={setPlayerName} setPageNumber={setPageNumber}/> : null
      }
      {
        pageNumber===2? <Game/> : null
      }

  </div>)
}

export default App;
