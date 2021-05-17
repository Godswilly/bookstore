import { CREATE_BOOK,  REMOVE_BOOK } from './index.js';

export const addBook = (title, category) => ({
  type:CREATE_BOOK,
  payload: {
    title,
    category,
  },
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});
