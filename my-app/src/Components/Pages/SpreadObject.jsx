import React, { useState } from 'react'

function Spread() {
    const [fruit, setfruit] = useState([{fruit:"apple",color:"red"},{fruit:"mango",color:"yellow"}])
    const veg={fruit:"banana",color:"yellow"}

    const addFruit=()=>{
        setfruit([...fruit,{...veg}])
    }

  return (
    <div>
        <table>
            <tr>
                <th>fruit</th>
                <th>Color</th>
            </tr> 
            {fruit.map((show)=>
            <tr> 
            <td> {show.fruit}</td>
            <td> {show.color}</td>
        </tr>
            )}
            
        </table>
        <button onClick={addFruit}>add cars</button>
    </div>
  )
}

export default Spread