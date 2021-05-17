import React from 'react';
import './App.css';
import BookForm from '../containers/BooksForm';
import BookList from '../containers/BooksList';

function App() {
  return (
    <div>
      <BookForm />,
      <BookList />
    </div>
  )
}

export default App;
