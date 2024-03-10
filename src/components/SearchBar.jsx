import React, { useState } from 'react'
import axios from 'axios'
import classes from '../modules/SearchBar.module.scss'

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAewZI4PuJo4gHLiBAMnmv5jFndxUbIRmo`)
      const books = response.data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      }))
      onSearch(books)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  

  return (
    <div>
      <input
        type="text"
        placeholder="Book Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;
