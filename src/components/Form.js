import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './Form.css';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      item_id: Math.round(Math.random() * 1000),
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input className="bookInput" type="text" placeholder="Book title" value={title} onChange={titleHandler} required />
      <div className="custome-select">
        <select className="bookSelect" name="category" placeholder="optiopn" value={category} onChange={categoryHandler} required>
          <option className="option" selected>Category</option>
          <option className="option" value="Fiction">Fiction</option>
          <option className="option" value="History">History</option>
          <option className="option" value="History">Manga</option>
        </select>
      </div>
      <span className="custome-arrow" />
      <input className="update-btn add-book-btn" type="submit" value="Add book" />

    </form>
  );
}

export default Form;
