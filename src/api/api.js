import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qdrNrAMV3sFxA9qazfks/books';

export const fetchBooks = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export const deleteBooks = async () => {

};
