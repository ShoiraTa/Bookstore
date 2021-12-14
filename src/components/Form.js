import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './Form.css';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      id: Math.round(Math.random() * 1000),
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input className="bookInput" type="text" placeholder="Book title" value={title} onChange={titleHandler} required />
      <input className="bookInput" type="text" placeholder="Author" value={author} onChange={authorHandler} required />
      <select className="bookSelect" name="category" placeholder="optiopn" value={category} onChange={categoryHandler} required>
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
        <option value="History">Manga</option>
      </select>
      <input className="submit" type="submit" value="Add book" />
    </form>
  );
}

export default Form;
