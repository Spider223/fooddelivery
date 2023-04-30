import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Cards({
  item: { category, description, item_name, price },
}) {
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px", marginBottom: "30px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{item_name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
