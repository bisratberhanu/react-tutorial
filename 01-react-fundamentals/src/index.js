import React from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
const BookList = () => {
  return (
    <>
      <h1 className="header">amazon best seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index}></Book>;
        })}
      </section>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
