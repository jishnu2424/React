import React from 'react'

function Props5({val1,val2}) {
    function update(){
         val2(val1.map((display, index)=>index===0?{ ...display,place:'knnr'}:display));
      };
  return (
    <div>
        {val1.map((display ,index)=>
        <>
        <h1>{display.name}</h1>,
        <h1>{display.place}</h1>
        </> 
        )}
        <button style={{backgroundColor:"black",color:"white"}}onClick={update}>UPDATE</button>
    </div>
  )
}

export default Props5