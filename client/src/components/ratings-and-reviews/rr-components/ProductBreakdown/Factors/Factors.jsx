import React from 'react';
import { Container, Background, FlexWrapper, Description, Caret } from './FactorsBar';
import { FaCaretDown } from 'react-icons/fa';

const Factors = function ({ name, value }) {
  const avgRate = Number(value).toFixed(2);

  if (name === 'Size') {
    const scale = (avgRate / 5) * 100;
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Caret percent={scale}>
            <FaCaretDown />
          </Caret>
        </Container>
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
    const scale = (avgRate / 5) * 100;
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Caret percent={scale}>
            <FaCaretDown />
          </Caret>
        </Container>
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
    const scale = (avgRate / 5) * 100;
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Caret percent={scale}>
            <FaCaretDown />
          </Caret>
        </Container>
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
    const scale = (avgRate / 5) * 100;
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Caret percent={scale}>
            <FaCaretDown />
          </Caret>
        </Container>
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
    const scale = (avgRate / 5) * 100;
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Caret percent={scale}>
            <FaCaretDown />
          </Caret>
        </Container>
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
    const scale = (avgRate / 5) * 100;
    return (
      <li>
        <div>{name}</div>
        <Container>
          <Caret percent={scale}>
            <FaCaretDown />
          </Caret>
        </Container>
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