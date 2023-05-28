import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function Cards({ item: { name, description, img, options } }) {
  const [varient, setVarient] = useState("half");
  const [quantity, setQuantity] = useState(1);

  const optionsKey = Object.keys(options[0]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch(cart);
  const navigate = useNavigate();

  const checkUser = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      dispatch(
        addToCart({ name, description, img, options, varient, quantity })
      );
    }
  };

  return (
    <Container>
      <Card style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}>
                  {optionsKey.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((i) => (
                    <option value={i + 1} key={i}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6} style={{ fontWeight: "3rem", fontSize: "20px" }}>
              Price: {options[0][varient] * quantity}
            </Col>
            <Col md={6}>
              <Button onClick={checkUser}>Add to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* modal */}

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
