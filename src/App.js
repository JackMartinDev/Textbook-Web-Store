import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Books from "./Components/Books/Books";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const ShowCartHandler = () => {
    setCartShown(true);
  };

  const HideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      <React.Fragment>
        {cartShown && <Cart onClose={HideCartHandler}></Cart>}
        <Header onShowCart={ShowCartHandler}></Header>
        <main>
          <Books></Books>
        </main>
      </React.Fragment>
    </CartProvider>
  );
}

export default App;
