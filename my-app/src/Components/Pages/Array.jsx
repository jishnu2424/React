import React, { useState } from 'react'

function Array() {
    const [first, setfirst] = useState([{name:"anu",place:"tvm",number:161},{name:"sachu",place:"clt",number:12564},{name:"ammu",place:"tvm",number:161},{name:"adith",place:"tvm",number:161},{name:"midhu",place:"tvm",number:161}])
  return (
    <div>
        {/* {first.map((item)=>
        <>
        <h1>{item.name}</h1>
        <h3>{item.place}</h3>
        <h1>{item.number}</h1>
        
        </>
        
        )} */}

        {first.map((item,index)=>{
            return(<>
             <p>{index}</p>
            <h1>{item.name}</h1>
            </>  )  
            
        })}
    </div>
  )
}

export default Array