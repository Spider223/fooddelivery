import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../features/menu/menuSlice";

export default function Home() {
  const dispatch = useDispatch();
  const menuLists = useSelector((state) => state.menu);
  // console.log(menuLists);

  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  return (
    <>
      <Carousel />
      <Container>
        {menuLists.isLoading ? (
          <h1>loading...</h1>
        ) : (
          <Row>
            {menuLists.menuLists.map((item) => (
              <Col key={item._id} md={4}>
                <Card item={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
