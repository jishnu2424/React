import React, { useState } from 'react'

function Props2({name1,name2,age}) {
    
  return (
    <div>
        {/* <h1>{name1}</h1> */}
        {/* <button style={{backgroundColor:"black",color:"white"}} onClick={()=>name2("Adith")}>CHANGE</button> */}
        <h1>{age}</h1>
        {age>=18?<h1>adult</h1>:<h1>minor</h1>}
    
    </div>
  )
}

export default Props2