import React from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import "./index.css";
import {books} from "./books"
import Book from "./Book"
const BookList = () => {
  
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id}></Book>;
      })}
    </section>
  );
};


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
