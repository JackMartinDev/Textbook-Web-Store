import React from "react";
import "./Header.css";
import booksImg from "../../Assets/books.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Textbooks</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={booksImg} alt="Textbooks"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
