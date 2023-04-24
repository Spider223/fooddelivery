import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import momo from "../assets/momo.jpg"
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"



export default function slide() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={momo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>MOMO</h3>
          <p>Order this delicious momo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}> 
        <img
          className="d-block w-100"
          src={pizza}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={burger}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
