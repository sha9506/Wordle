import React, { useRef, useState } from "react";

const WordGuess =()=>
{
  const[word, setWord]= useState(new Array(5).fill(""));
  const wordReference = useRef([]); 

  const handleChange=(value, index)=>
  {
    let newArr = [...word];
    newArr[index] = value;
    setWord(newArr);
  }
  const handleAddAndRemove=(event, index)=>
  {
    if(event.key==="Backspace" && !event.target.value && index >0)
    {
        wordReference.current[index-1].focus()
    }
    if(event.key==='Enter' && event.target.value && index< 5-1)
    {
        wordReference.current[index+1].focus()
    }


  }

  return(
    <div>
        <div>
            {word.map(({letter, index})=>
            {
               return( <input key={index} value={letter} maxLength={1}
                onChange={(event)=>handleChange(event.target.value, index)}
                onKeyUp={(event)=>handleAddAndRemove(event, index)}
                ref={(reference)=>(wordReference.current[index]=reference)}

                className="letter-box" />)
            })}
        </div>
    </div>
  )

}


export default WordGuess;
