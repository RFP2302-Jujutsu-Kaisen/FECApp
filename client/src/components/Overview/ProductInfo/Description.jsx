import React from 'react';

export default function Description({ prod }) {
  if (Object.keys(prod).length > 0 && prod.description.length > 0) {
    if (prod.slogan.length > 0) {
      return (
        <div data-testid="descId">
          <h3>Description</h3>
          <p>{prod.slogan}</p>
          <p>{prod.description}</p>
        </div>
      );
    }
    return (
      <div data-testid="descId">
        <h3>Description</h3>
        <p>{prod.description}</p>
      </div>
    );
  }

  return (
    <div data-testid="descId">
      <h3>Description</h3>
    </div>
  );
}
