import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/books';
import Book from '../components/Books';
import CategoryFilter from '../components/CategoryFilter';

function BooksList() {
  const allBooks = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => dispatch(removeBook(id));

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filterBooks = (allBooks) => (
    filter === 'All' ? allBooks
      : allBooks.filter((book) => book.category === filter)
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
        { filterBooks(allBooks)
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
}
export default BooksList;
