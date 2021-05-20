import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  return (
    <div className="book main">
      <div className="book container">
        <div className="book book-info">
          <div className="book category">{book.category}</div>
          <div className="book title">{book.title}</div>
          <div className="book writer">Suzanne Collins</div>
        </div>

        <div className="book buttons">
          <button type="button" className="book btn-action">
            Comments
          </button>
          <button
            className="book btn-action remove-btn"
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button className="book btn-action edit-btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book percent-container">
        <div className="book percent">
        <div className="book oval"></div>
        </div>
        <div className="book percent-subcontainer">
          <div className="book percent-info"> 64% </div>
          <div className="book percent-status">Completed</div>
        </div>
      </div>
      <div className="book progress">
        <div className="book current-text">CURRENT CHAPTER</div>
        <div className="book current-chapter">Chapter 17</div>
        <button type="button" className="book update-progress">
        UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {
    id: 1,
    title: '',
    category: '',
  },
};

export default Book;
