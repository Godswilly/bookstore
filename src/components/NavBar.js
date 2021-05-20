import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../actions/books';
import CategoryFilter from './CategoryFilter';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className="navbar main">
      <div className="navbar content">
        <h1>BookStore CMS</h1>
        <h3>BOOKS</h3>
        <h3>CATEGORIES</h3>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default NavBar;
