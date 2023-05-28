import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Food Delivery</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto"
              style={{
                fontStyle: "italic",
                fontSize: "17px",
                textShadow: "2px 2px 5px",
              }}>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/policy">
                <Nav.Link>Terms & Policy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {localStorage.getItem("token") ? (
              <div style={{ display: "flex" }}>
                <Nav>
                  <LinkContainer to="/cart">
                    <Nav.Link>
                      {" "}
                      <AiOutlineShoppingCart style={{ gap: "3rem" }} />
                      Cart
                    </Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
              </div>
            ) : (
              ""
            )}
            {!localStorage.getItem("token") ? (
              <Nav>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              ""
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
