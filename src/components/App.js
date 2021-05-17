import React from 'react';
import './App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
      <div>
        <BooksList />
        <BooksForm />
      </div>
  )
}

export default App;
