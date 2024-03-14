import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Carosel() {
    const [first, setfirst] = useState([{name:"Anju",place:"TVM",img:"https://images.pexels.com/photos/1470165/pexels-photo-1470165.jpeg?auto=compress&cs=tinysrgb&w=600"},{name:"Sanju",place:"TVM",img:"https://images.pexels.com/photos/2362155/pexels-photo-2362155.jpeg?auto=compress&cs=tinysrgb&w=600"},{name:"Panju",place:"TVM",img:"https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600"}])
  return (
<div>
    <Carousel>
{first.map((item)=>
    
    <Carousel.Item>
    <img src={item.img}/>      
    <Carousel.Caption>
    <h3 style={{color:"black"}}>{item.name}</h3>
    <p style={{color:"black"}}>{item.place}.</p>
    </Carousel.Caption>
    </Carousel.Item>

 )}
    </Carousel>     
</div>
  )
}

export default Carosel