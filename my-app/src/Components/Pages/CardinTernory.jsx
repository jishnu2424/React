import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function CardinTernory() {
  const [showText, setShowText] = useState(false);

  const first = [
    {
      name: "Anju",
      place: "TVM",
      img: "https://images.pexels.com/photos/1470165/pexels-photo-1470165.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sanju",
      place: "TVM",
      img: "https://images.pexels.com/photos/2362155/pexels-photo-2362155.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Panju",
      place: "TVM",
      img: "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const second = [
    {
      name: "mango",
      place: "TVM",
      img: "https://images.pexels.com/photos/2667738/pexels-photo-2667738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Apple",
      place: "TVM",
      img: "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "grape",
      place: "TVM",
      img: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const cardsToShow = showText ? first : second;

  return (
    <div>
      <div className="cadd">
        {cardsToShow.map((cad, index) => (
          <Card key={index} style={{ width: "18rem" }} className="cards">
            <Card.Img variant="top" src={cad.img} />
            <Card.Body>
              <Card.Title>{cad.name}</Card.Title>

              <Card.Text>{cad.place}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button onClick={() => setShowText(!showText)} variant="primary">{showText ? "Fruits" : "Photos"}</Button>
    </div>
  );
}

export default CardinTernory;
