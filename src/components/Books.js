import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import './Books.css';

function Books() {
  const allBooks = useSelector((state) => state.allBooks);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, []);

  return (
    <div className="booksContainer">
      {allBooks.map((book) => (
        allBooks.length > 0 ? <Book singleBook={book} key={book.id} /> : ''
      ))}
      <div className="formContainer">
        <h1 className="add-new">Add a new Book</h1>
        <Form />
      </div>
    </div>
  );
}

export default Books;
