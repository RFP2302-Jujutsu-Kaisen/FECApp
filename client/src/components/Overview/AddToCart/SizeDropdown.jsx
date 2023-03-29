import React from 'react';

export default function SizeDropdown({
  skus, inStockSkus, skuHandler, skuState, buttonCheck,
}) {
  if (buttonCheck) {
    return (
      <div>
        <h3>Please select size</h3>
        <select
          name="sizedropdown"
          onChange={skuHandler}
          size={String(inStockSkus.length)}
          value="default"
        >
          <option key="default" value="">Select Size</option>
          {inStockSkus.map((key) => (
            <option key={key} value={key}>{skus[key].size}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div>
      <select name="sizedropdown" onChange={skuHandler} value={skuState}>
        <option key="default" value="">Select Size</option>
        {inStockSkus.map((key) => (
          <option key={key} value={key}>{skus[key].size}</option>
        ))}
      </select>
    </div>
  );
}
