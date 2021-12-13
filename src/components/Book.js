import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';

function Book({ singleBook }) {
  return (
    <div className="bookRow">
      <div className="bookInfo">
        <p className="category">{singleBook.category}</p>
        <h1 className="title">
          {' '}
          {singleBook.title}
        </h1>
        <p className="author">{singleBook.author}</p>
      </div>
      <div className="actions">
        <ul>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
  );
}

Book.propTypes = {
  singleBook: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
