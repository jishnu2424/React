import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function Example() {
  const [first, setfirst] = useState((abc) => [
    { name: "gghdg", place: "hjhfghd", phone: 156414544 },
    { name: "ggghfhdg", place: "ghd", phone: 144 },
    { name: "gghdg", place: "hjhfghd", phone: 156414544 },
    { name: "gghdg", place: "hjhfghd", phone: 156414544 },
  ]);
  return (
    <div style={{ display: "flex" }}>
      {first.map((abc) => (
        <>
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img variant="top" src={{}} />
            <Card.Body>
              <Card.Title>{abc.name}</Card.Title>
              <Card.Text>{abc.phone}</Card.Text>
              <Button style={{ marginLeft: "60px" }} variant="primary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  );
}

export default Example;
