import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 16px;
`;

const Input = styled.input`
  font-family: system-ui;
  font-color: black;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  border: 1px solid;
  width: 400px;
  margin-right: 16px;
`;

const Button = styled.button`
  font-family: system-ui;
  font-size: 16px;
  padding: 8px 16px;
  border: 1px solid;
  background-color: #fff;
  cursor: pointer;
`;

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length >= 3) {
      onSearch(event.target.value);
    } else {
      onSearch('');
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="QASearch"
          value={search}
          onChange={handleChange}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        <Button type="submit">Go!</Button>
      </Form>
    </div>
  );
}
