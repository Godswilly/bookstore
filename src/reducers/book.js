import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index.js';

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

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];

    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default bookReducer;