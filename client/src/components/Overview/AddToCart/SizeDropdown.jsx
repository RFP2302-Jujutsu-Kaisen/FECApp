import React from 'react';

export default function SizeDropdown({ skus,  skuHandler}) {
  return (
    <div>
      <h3>SizeDropdown</h3>
      <select name="sizedropdown" onChange={skuHandler}>
        <option key="default" value="default">Select Size</option>
        {Object.keys(skus).map((key) => (
          <option key={key} value={key}>{skus[key].size}</option>
        ))}
      </select>
    </div>
  );
}
