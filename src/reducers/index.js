import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = [
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
];

const store = createStore(rootReducer, initialState);

export default store;
