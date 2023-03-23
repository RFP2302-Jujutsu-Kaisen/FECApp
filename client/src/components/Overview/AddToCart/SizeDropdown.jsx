import React from 'react';

export default function SizeDropdown({ skus }) {
  return (
    <div>
      <h3>SizeDropdown</h3>
      <select name="sizedropdown">
        <option key="default" value="default">Select Size</option>
        {Object.keys(skus).map((key) => (
          <option key={key} value={skus[key].size}>{skus[key].size}</option>
        ))}
      </select>
    </div>
  );
}
