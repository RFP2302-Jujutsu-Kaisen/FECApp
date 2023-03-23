import React from 'react';

export default function QuantityDropdown({ sku }) {
  return (
    <div>
      <h3>QuantityDropdown</h3>
      <select name="quantitydropdown">
        <option key="default" value="default">-</option>
      </select>
    </div>
  );
}
