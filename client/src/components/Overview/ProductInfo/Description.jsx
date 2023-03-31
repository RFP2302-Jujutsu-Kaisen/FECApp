import React from 'react';
import styled from 'styled-components';

const SloganH = styled.h3`
  font: 550 2.0em "system-ui";
`;

const DescP = styled.p`
  font: 250 1.0em "system-ui";
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 5px;
  width: 90%;
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export default function Description({ prod }) {
  if (Object.keys(prod).length > 0 && prod.description.length > 0) {
    if (prod.slogan.length > 0) {
      return (
        <DescContainer>
          <DescWrapper data-testid="descId">
            <SloganH>{prod.slogan}</SloganH>
            <DescP>{prod.description}</DescP>
          </DescWrapper>
        </DescContainer>
      );
    }
    return (
      <DescWrapper data-testid="descId">
        <SloganH />
        <DescP>{prod.description}</DescP>
      </DescWrapper>
    );
  }

  return (
    <div data-testid="descId">
      <h3>Description</h3>
    </div>
  );
}
