import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button">Remove book</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

Book.defaultProps = {
  book: {
    id: 1,
    title: '',
    category: '',
  },
};

export default Book;
