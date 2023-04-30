import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Login() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: userDetail.email,
      password: userDetail.password,
    };
    axios
      .post("http://localhost:8000/api/v1/user/login", data)
      .then((result) => {
        console.log(result);
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userDetail.email}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userDetail.password}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
