import "./BookItem.css";
import { useContext } from "react";
import BookItemForm from "./BookItemForm";
import CartContext from "../../Store/cart-context";

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCardHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="book">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <BookItemForm
          onAddToCart={addToCardHandler}
          id={props.id}
        ></BookItemForm>
      </div>
    </li>
  );
};

export default BookItem;
