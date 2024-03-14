import React, { useState } from 'react'

function Buttonchange() {

const [first, setfirst] = useState("Black")



  return (
    <div>
        <h1 style={{color:first}}>TEXT COLOR IS {first}</h1>
        <button onClick={()=>setfirst("Red")} style={{backgroundColor:"Red",borderRadius:10,marginLeft:10}}>Red</button>
        <button onClick={()=>setfirst("Yellow")} style={{backgroundColor:"Yellow",borderRadius:10,marginLeft:10}}>Yellow</button>
        <button onClick={()=>setfirst("Green")} style={{backgroundColor:"Green",borderRadius:10,marginLeft:10}}>Green</button>
        <button onClick={()=>setfirst("Brown")} style={{backgroundColor:"Brown",borderRadius:10,marginLeft:10}}>Brown</button>

    </div>
  )
}

export default Buttonchange