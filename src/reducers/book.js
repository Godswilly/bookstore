import { ADD_BOOK } from '../actions/index.js';

const initialState = [
  {
    id: 1,
    title: 'DNA',
    category: 'Genetics',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
      default:
        return state;
  }
};

export default bookReducer;