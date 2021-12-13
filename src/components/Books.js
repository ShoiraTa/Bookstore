import React from 'react';
import Book from './Book';
import Form from './Form';
import './Books.css';

const list = [
  {
    title: 'Some book',
    id: 1,
    author: 'Someone',
    category: 'Fiction',
  },
];

function Books() {
  return (
    <div className="booksContainer">
      {list.map((book) => (
        <Book singleBook={book} key={book.id} />
      ))}
      <div className="formContainer">
        <h1>Add a new Book</h1>
        <Form />
      </div>
    </div>
  );
}

export default Books;
