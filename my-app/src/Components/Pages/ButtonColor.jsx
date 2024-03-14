import React, { useState } from 'react'

function ButtonColor() {
  const [first, setfirst] = useState("Black")
  
  


  return (
    <div>
        <h1>TEXT COLOR IS {first}</h1>
        <button onClick={()=>setfirst("Red")} style={{backgroundColor:"Red"}}>Red</button>
        <button onClick={()=>setfirst("Yellow")} style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={()=>setfirst("Green")} style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>setfirst("Brown")} style={{backgroundColor:"Brown"}}>Brown</button>
      
    </div>
  )
}

export default ButtonColor