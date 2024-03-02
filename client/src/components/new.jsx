import React from 'react';
import SearchComponent from './SearchComponent';

const ParentComponent = () => {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here based on the search term
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <h1>Search Example</h1>
      <SearchComponent onSearch={handleSearch} />
      {/* Other content goes here */}
    </div>
  );
};

export default ParentComponent;
