import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/books';
import Book from '../components/Books';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  const filter = useSelector((state) => state.filter);
  const handleRemoveBook = (id) => dispatch(removeBook(id));

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filterBooks = (books) => (
    filter === 'All' ? books
      : books.filter((book) => book.category === filter)
  );

  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          { filterBooks(books)
            .map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => handleRemoveBook(book.id)}
              />
            ))}
        </tbody>
      </table>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
  );
};

export default BooksList;
