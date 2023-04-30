import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/menuList")
      .then((result) => {
        console.log(result.data);
        setList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Carousel />
      <Container>
        <Row>
          {list.map((item) => (
            <Col key={item._id} md={4}>
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
