import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { removeBook } from '../redux/books/books';

function Book({ singleBook }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeBook(singleBook.item_id));
  };
  return (
    <>
      <div className="bookRow" key={singleBook.item_id}>
        <div className="left-section">
          <div className="bookInfo">
            <p className="category">{singleBook.category}</p>
            <h1 className="title">
              {singleBook.title}
            </h1>
            <p className="author">{singleBook.author}</p>
          </div>
          <div className="actions">
            <ul>
              <li>
                <button type="submit">Comments</button>
              </li>
              <li>
                <button type="submit" onClick={deleteHandler}> Remove</button>
              </li>
              <li>
                <button type="submit">Edit</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border">
          <div className="middle-section">
            <div className="progress-div">
              <CircularProgressbar
                value={64}
                strokeWidth={8}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathTransitionDuration: 0.5,
                  pathColor: '#0290ff',
                  trailColor: '#DFE3E8',
                  backgroundColor: '#3e98c7',
                })}
              />
            </div>
            <div className="text-div">
              <p className="presentage-text">64%</p>
              <p className="completed-text">Completed</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <p className="current-chapter">Current Chapter</p>
          <p className="chapter">Chapter 17</p>
          <button className="update-btn" type="button">Update progress</button>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  singleBook: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    item_id: PropTypes.number,
  }).isRequired,
};

export default Book;
