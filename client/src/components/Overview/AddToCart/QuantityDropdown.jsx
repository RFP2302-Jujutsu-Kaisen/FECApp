import React from 'react';

export default function QuantityDropdown({ sku, quantityHandler }) {
  const optionsArr = [];
  const choices = Object.keys(sku).length > 0 ? Math.min(sku.quantity, 15) : 0;
  for (let i = 1; i <= choices; i += 1) {
    optionsArr.push(<option key={i} value={i}>{i}</option>);
  }

  if (optionsArr.length > 0) {
    return (
      <div>
        <h3>QuantityDropdown</h3>
        <select name="quantitydropdown" onChange={quantityHandler}>
          {optionsArr}
        </select>
      </div>
    );
  }
  return (
    <div>
      <h3>QuantityDropdown</h3>
      <select name="quantitydropdown" disabled>
        <option key="default" value="default">-</option>
      </select>
    </div>
  );
}
