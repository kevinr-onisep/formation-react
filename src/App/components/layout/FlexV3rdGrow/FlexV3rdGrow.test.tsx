import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexV3rdGrow from './FlexV3rdGrow';

describe('<FlexV3rdGrow />', () => {
  test('it should mount', () => {
    render(<FlexV3rdGrow />);

    const flexV3rdGrow = screen.getByTestId('FlexV3rdGrow');

    expect(flexV3rdGrow).toBeInTheDocument();
  });
});