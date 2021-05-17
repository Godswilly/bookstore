import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BooksList />
        <BooksForm />
      </div>
    </Provider>
  )
}

export default App;
