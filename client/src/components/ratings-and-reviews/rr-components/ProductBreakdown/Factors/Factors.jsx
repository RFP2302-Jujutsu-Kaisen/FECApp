import React from 'react';
import { Container, Background, FlexWrapper, Description } from './FactorsBar';

const Factors = function ({ name, value }) {
  const avgRate = Number(value).toFixed(2);

  if (name === 'Size') {
    return (
      <li>
        <div>{name}</div>
        <Container >
          <Background />
        </Container>
        <Description>
          <div>A size too small</div>
          <div>A size too wide</div>
        </Description>
      </li>
    );
  }
  if (name === 'Width') {
    return (
      <li>
        <div>{name}</div>
        <Container >
          <Background />
        </Container>
        <Description>
          <div>Too narrow</div>
          <div>Too wide</div>
        </Description>
      </li>
    );
  }
  if (name === 'Comfort') {
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Background />
        </Container>
        <Description>
          <div>Uncomfortable</div>
          <div>Perfect</div>
        </Description>

      </li>
    );
  }
  if (name === 'Quality') {
    return (
      <li>
        <div>{name}</div>
        <Container >
          <Background />
        </Container>
        <Description>
          <div>Poor</div>
          <div>Perfect</div>
        </Description>
      </li>
    );
  }
  if (name === 'Length') {
    return (
      <li>
        <div>{name}</div>
        <Container >
          <Background />
        </Container>
        <Description>
          <div>Runs Short</div>
          <div>Runs long</div>
        </Description>
      </li>
    );
  }
  if (name === 'Fit') {
    return (
      <li>
        <div>{name}</div>
        <Container >
          <Background />
        </Container>
        <Description>
          <div>Runs tight</div>
          <div>Runs long</div>
        </Description>
      </li>
    );
  }
};

export default Factors;