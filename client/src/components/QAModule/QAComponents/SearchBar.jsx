import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length >= 3) {
      onSearch(event.target.value);
    } else {
      onSearch('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="QASearch"
          value={search}
          onChange={handleChange}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
