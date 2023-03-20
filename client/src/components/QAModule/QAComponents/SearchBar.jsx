import React from 'react';

export default function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="QASearch"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        <button type="submit" onClick={handleSubmit}>Go!</button>
      </form>
    </div>
  );
}
