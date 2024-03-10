import React from 'react'
import classes from '../modules/BookList.module.scss'

const BookList = ({ books }) => {
  return (
    <div className={classes['book-wrapper']}>
      <ul>
        {books.map((book) => (
        <>
         
          <li key={book.id}>
            <img src={book.thumbnail} alt='img'/>
            <h3>{book.title} <br />
            {book.authors}
            </h3>
            <p>{book.description}</p>
          </li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default BookList
