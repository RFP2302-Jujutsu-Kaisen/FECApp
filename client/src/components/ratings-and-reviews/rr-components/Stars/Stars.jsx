import React from 'react';
import styled from 'styled-components';

const StarsDisplay = styled.div`
  color: red;
  &:hover {
    color: blue;
  }
  `;

const Stars = function () {
  return (
    <div>
      <h4>Stars Average Review Rating</h4>
      <StarsDisplay>
        <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
      </StarsDisplay>
    </div>
  );
};

export default Stars;
