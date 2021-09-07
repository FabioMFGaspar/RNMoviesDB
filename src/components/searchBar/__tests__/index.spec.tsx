import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '..';

describe('SearchBar test suite', () => {
  const mockHandle = jest.fn();

  it('Default snapshot test', () => {
    const {toJSON} = render(
      <SearchBar query="dummyQuery" handleSearch={mockHandle} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should trigger onChangeText', () => {
    const {getByPlaceholderText} = render(
      <SearchBar query="dummyQuery" handleSearch={mockHandle} />,
    );

    fireEvent(getByPlaceholderText('Search...'), 'onChangeText', 'dummyChange');
    expect(mockHandle).toHaveBeenCalledWith('dummyChange');
  });
});
