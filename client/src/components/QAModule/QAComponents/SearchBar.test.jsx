import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const handleSearch = jest.fn();

  test('renders SearchBar component', () => {
    render(<SearchBar onSearch={handleSearch} />);

    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')).toBeInTheDocument();
    expect(screen.getByText('Go!')).toBeInTheDocument();
  });

  test('handles input change and triggers onSearch', () => {
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    fireEvent.change(input, { target: { value: 'tes' } });

    expect(input.value).toBe('tes');
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  test('triggers onSearch with an empty string for input with less than 3 characters', () => {
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    fireEvent.change(input, { target: { value: 'te' } });

    expect(input.value).toBe('te');
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('');
  });

  // test('prevents default form submission', () => {
  //   const handleSubmit = jest.fn();
  //   render(<SearchBar onSearch={handleSearch} />);

  //   const form = screen.getByRole('textbox');
  //   fireEvent.submit(form, { preventDefault: handleSubmit });

  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  // });
});
