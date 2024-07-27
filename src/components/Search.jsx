import React from 'react';

const Search = ({ onSearch, setSearchTerm }) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Search retreat by title" onChange={handleSearch} />
    </div>
  );
};

export default Search;
