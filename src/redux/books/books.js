import { fetchBooks, deleteBook, postBook } from '../../api/api';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const initialState = [];

const dataToArr = (data) => {
  const arr = [];
  Object.keys(data).map((key) => {
    const book = data[key][0];
    book.item_id = key;
    return arr.push(book);
  });
  return arr;
};

export const getBooks = () => async (dispatch) => {
  const data = await fetchBooks();
  const convertedData = dataToArr(data);
  dispatch({ type: GET_BOOKS, payload: convertedData });
};

export const addBook = (payload) => async (dispatch) => {
  await postBook(payload);
  dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({ type: REMOVE_BOOK, payload });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
    { return [...state, action.payload]; }

    case REMOVE_BOOK: {
      return state.filter((book) => book.item_id !== action.payload);
    }
    case GET_BOOKS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default booksReducer;
