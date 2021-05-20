import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import NavBar from './NavBar';

function App() {
  return (
    <div className="app main">
      <NavBar />
      <BooksList />
      <div className="app line"> </div>
      <BooksForm />
    </div>
  );
}

export default App;
