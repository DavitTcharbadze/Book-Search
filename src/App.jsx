import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import classes from './modules/App.module.scss'

const App = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  return (
    <Router>
      <div className={classes['main-wrapper']}>
        <header className={classes['main-header']}>
          <h1>Search for the book</h1>
        </header>
        <div className={classes['main-results']}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <SearchBar onSearch={handleSearch} />
                  <BookList books={searchResults} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
