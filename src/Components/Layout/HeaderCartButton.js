import React, { useContext } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
