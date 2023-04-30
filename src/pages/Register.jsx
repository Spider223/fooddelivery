import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      location: userData.location,
    };
    axios
      .post("http://localhost:8000/api/v1/user/register", data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={userData.email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={onChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="name"
            value={userData.name}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="location"
            value={userData.location}
            onChange={onChange}
          />
        </Form.Group>

        <div style={{ display: "flex", gap: "2 rem" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <h4 style={{ fontSize: "20px", padding: "7px" }}>
            Already a user?
            <Link to="/login"> Click here</Link>
          </h4>
        </div>
      </Form>
    </Container>
  );
}
