import React from 'react';
import Factors from './Factors';
import ListStyle from './ProductBreakdownStyles';

const ProductBreakdown = function ({ Characteristics }) {
  const charTypes = [];
  for (const props in Characteristics) {
    charTypes.push({name: props, id: Characteristics[props].id, value: Characteristics[props].value})
  }
  const charItems = charTypes.map((char) =>
    <Factors key={char.id} name={char.name} value={char.value} />
  );

  return (
    <div>
      <ListStyle>{charItems}</ListStyle>
    </div>
  );
};

export default ProductBreakdown;
