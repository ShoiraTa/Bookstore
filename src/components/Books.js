import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import './Books.css';

function Books() {
  const allBooks = useSelector((state) => state.allBooks);

  return (
    <div className="booksContainer">
      {allBooks.map((book) => (
        allBooks.length > 0 ? <Book singleBook={book} key={book.id} /> : ''
      ))}
      <div className="formContainer">
        <h1>Add a new Book</h1>
        <Form />
      </div>
    </div>
  );
}

export default Books;
