import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import burger from "../assets/burger.jpg";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  //   console.log("test", test);

  return (
    <main>
      <div className="cart-container">
        <div className="header">
          <h3 className="heading">Shopping Cart</h3>
          <h5 className="action">Remove All</h5>
        </div>
        {cart.map((item) => {
          return (
            <div className="cart-items">
              <div className="image-box">
                <img src={item.img} style={{ height: "120px" }} />
              </div>
              <div className="about">
                <h1 className="title">{item.name}</h1>
                <RiDeleteBinFill />
              </div>
              <div className="counter">
                <div className="btn">+</div>
                <div className="count">{item.quantity}</div>
                <div className="btn">-</div>
              </div>
              <div className="prices">
                <div className="amount">
                  Rs. {item.options[0][item.varient] * item.quantity}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
