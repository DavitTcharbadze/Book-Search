import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import classes from './modules/App.module.scss'

const App = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  return (
      <div className={classes['main-wrapper']}>
          <h1>Search for the book</h1>
      <div className={classes['main-results']}>
      <div>
          <SearchBar onSearch={handleSearch} />
          <BookList books={searchResults} />
       </div>
        </div>
      </div>
  )
}

export default App;
