import React from 'react';

export default function AddCheckButton({ checkHandler }) {
  return (
    <div>
      <button
        type="button"
        onClick={checkHandler}
      >
        Add to Cart
      </button>
    </div>
  );
}
