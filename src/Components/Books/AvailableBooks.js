import "./AvailableBooks.css";
import BookItem from "./BookItem/BookItem";
import Card from "../UI/Card";

const DUMMY_BOOKS = [
  {
    id: "b1",
    name: "Japanese Textbook",
    description: "Japanese textbook aimed at the JLPT N1",
    price: 59.99,
  },
  {
    id: "b2",
    name: "World History",
    description: "Teaches history from 2000BC to 2000AD!",
    price: 99.99,
  },
  {
    id: "b3",
    name: "Maths",
    description: "Highschool 1st Year Maths Textbook",
    price: 33.0,
  },
  {
    id: "b4",
    name: "Guitar for Beginners",
    description:
      "Designed to take you from beginner to intermediate on the Guitar",
    price: 32.5,
  },
];

const AvailableBooks = () => {
  const booksList = DUMMY_BOOKS.map((book) => (
    <BookItem
      id={book.id}
      key={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    ></BookItem>
  ));
  return (
    <section className="books">
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
