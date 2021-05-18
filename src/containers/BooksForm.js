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

  const handleChange = (event) => {
    if (event.target.name === 'title') setTitle(event.target.value);
    if (event.target.name === 'category') setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && category) {
      dispatch(addBook(title, category));
      setTitle('');
      setCategory('Action');
      event.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <select
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
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default BooksForm;
