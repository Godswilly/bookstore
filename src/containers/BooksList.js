import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../actions/books';
import Book from '../components/Books';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  const filter = useSelector((state) => state.filter);
  const handleRemoveBook = (id) => dispatch(removeBook(id));

  const filterBooks = (books) => (
    filter === 'All' ? books
      : books.filter((book) => book.category === filter)
  );

  return (
    <div>
      <div>
        {filterBooks(books).map(book => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={() => handleRemoveBook(book.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
