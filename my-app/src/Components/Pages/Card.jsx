import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../Styles/cad.css";

function Card2() {
  const [first, setfirst] = useState([
    {
      name: "Anju",
      place: "TVM",
      img:
        "https://images.pexels.com/photos/1470165/pexels-photo-1470165.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sanju",
      place: "TVM",
      img:
        "https://images.pexels.com/photos/2362155/pexels-photo-2362155.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Panju",
      place: "TVM",
      img:
        "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  return (
    <div className="cadd">
      {first.map((cad) => (
        <>
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img variant="top" src={cad.img} />
            <Card.Body>
              <Card.Title>{cad.name}</Card.Title>
              <Card.Text>{cad.place}</Card.Text>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  );
}

export default Card2;
