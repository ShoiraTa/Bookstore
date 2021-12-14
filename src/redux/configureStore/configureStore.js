import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from '../books/books';

const reducer = combineReducers({
  allBooks: booksReducer,
});
const store = createStore(reducer, applyMiddleware(logger));

export default store;
