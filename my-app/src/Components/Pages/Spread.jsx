import React, { useState } from 'react'

function Spread() {
    const [car, setcar] = useState([{car:"bmw",color:"black"},{car:"audi",color:"white"}])
    const car2=[{car:"benz",color:"blue"},{car:"lembo",color:"cyan"}]

    const addCar=()=>{
        setcar([...car,...car2])
    }

  return (
    <div>
        <table>
            <tr>
                <th>Car</th>
                <th>Color</th>
            </tr> 
            {car.map((show)=>
            <tr> 
            <td> {show.car}</td>
            <td> {show.color}</td>
        </tr>
            )}
            
        </table>
        <button onClick={addCar}>add cars</button>
    </div>
  )
}

export default Spread