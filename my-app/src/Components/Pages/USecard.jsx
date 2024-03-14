import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { newcontext } from './Usecontext';

function USecard() {
    const [first,setfirst]=useContext(newcontext);
    console.log(first)
  return (
    <div style={{display:"flex"}}>
        {first.map((cad) => (
        <>
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img variant="top" src={"https://media.istockphoto.com/id/1415862623/photo/outdoor-adventures-in-norway-hammock-relax-in-nature.jpg?b=1&s=612x612&w=0&k=20&c=11Vo2_8UvJIw2HRcnKWwV4u5KT_1g_42ffpsF7rIhrg="} />
            <Card.Body>
              <Card.Title>{cad.name}</Card.Title>
              <Card.Text>{cad.place}</Card.Text>
              <Card.Text>{cad.number}</Card.Text>

            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  )
}

export default USecard