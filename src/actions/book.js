import { ADD_BOOK } from './index.js';

export const addBook = (id, title, category) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    category,
  },
});
