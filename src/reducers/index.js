import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  book: [
    {
      id: 1,
      title: 'DNA',
      category: 'Genetics',
    },
    {
      id: 2,
      title: 'RNA',
      category: 'Biotechnology',
    },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, { book: initialState });

export default store;
