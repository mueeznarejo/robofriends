import React from 'react';
import './SearchField.css'

const SearchField = ({searchChange}) => {
  return(
    <input
      className="search"  
      type="text" 
      placeholder="Search here..."
      onChange={searchChange} 
    />
  );
}

export default SearchField;
