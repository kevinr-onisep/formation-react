import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexH1stGrow from './FlexH1stGrow';

describe('<FlexH1stGrow />', () => {
  test('it should mount', () => {
    render(<FlexH1stGrow />);

    const flexH1stGrow = screen.getByTestId('FlexH1stGrow');

    expect(flexH1stGrow).toBeInTheDocument();
  });
});