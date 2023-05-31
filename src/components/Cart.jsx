import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { RiDeleteBinFill } from "react-icons/ri";
import {
  clearCart,
  increase,
  removeItem,
  decrease,
} from "../features/cart/cartSlice";

export default function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  // const deleteItem = () => {
  //   dispatch(removeItem(cart._id));
  // };
  return (
    <main>
      <div className="cart-container">
        <div className="header">
          <h3 className="heading">Shopping Cart</h3>
          <h5 className="action" onClick={() => dispatch(clearCart())}>
            Remove All
          </h5>
        </div>
        {cart.map((item) => {
          return (
            <div key={item._id}>
              <div className="cart-items">
                <div className="image-box">
                  <img src={item.img} style={{ height: "120px" }} />
                </div>
                <div className="about">
                  <h1 className="title">{item.name}</h1>
                  <h6 className="subtitle">[{item.varient}]</h6>

                  <RiDeleteBinFill
                    onClick={() => dispatch(removeItem(item._id))}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <div className="counter">
                  <div className="btn" onClick={() => dispatch(increase(item))}>
                    +
                  </div>
                  <div className="count">{item.quantity}</div>
                  <div className="btn" onClick={() => dispatch(decrease(item))}>
                    -
                  </div>
                </div>
                <div className="prices">
                  <div className="amount">
                    Rs. {item.options[0][item.varient] * item.quantity}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
