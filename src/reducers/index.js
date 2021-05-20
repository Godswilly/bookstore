import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const initialState = {
  book: [
    {
      id: 1,
      title: 'DNA',
      category: 'Genetics',
    },
    {
      id: 2,
      title: 'RNA',
      category: 'Biotech',
    },
    {
      id: 3,
      title: 'mRNA',
      category: 'Biochem',
    },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

export default store;
