import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  onUpdateShelf(book, shelf) {
    this.props.onUpdateShelf(book, shelf)
  }

  render() {
    const {book} = this.props;

    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ book.imageLinks ? { background:`url(${book.imageLinks.thumbnail})`} : {background : 'grey'} }></div>
          <div className={`book-shelf-changer ${book.shelf}`}>
            <select className="select" value={book.shelf} onChange={(e) => this.onUpdateShelf(book, e.target.value)}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;
