import React from 'react';
 // Ensure this path is correct

const SBox = ({ searchfield, searchChange}) => {
  return (
    <div className="p-2">
        <input 
      className="p-3 border border-green-500 bg-blue-100"
      type='search'  
      placeholder="search robots" 
      onChange = {searchChange}
      />
    </div>
      

  );
}

export default SBox;