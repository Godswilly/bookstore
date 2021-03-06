import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/books';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

function BooksForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && category) {
      dispatch(addBook(title, category));
      setTitle('');
      setCategory('Action');
      event.target.reset();
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'title') setTitle(event.target.value);
    if (event.target.name === 'category') setCategory(event.target.value);
  };

  return (
    <div className="books-form main">
      <div className="books-form add-text ">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit} className="books-form form-main ">
        <input
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Book Title"
          className="books-form input "
          required
        />
        <select
          className="books-form select-category "
          onChange={handleChange}
          name="category"
          required
        >
          <option disabled value>
            Select a category
          </option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="books-form add-book ">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BooksForm;
