import React from 'react';

const SearchBar = () => {

  return (
    <div>
      <form>
        <input
          type='text'
          name='QASearch'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        />
        <button>Go!</button>
      </form>
    </div>
  );
};

export default SearchBar;