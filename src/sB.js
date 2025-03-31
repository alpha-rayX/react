import React from 'react';
 // Ensure this path is correct

const SBox = ({ searchfield, searchChange}) => {
  return (
      <input type='search'  
      placeholder="search robots" 
      onChange = {searchChange}
      />

  );
}

export default SBox;