import { ADD_BOOK } from './index.js';

export const addBook = (title, category) => ({
  type: ADD_BOOK,
  payload: {
    title,
    category,
  },
});
