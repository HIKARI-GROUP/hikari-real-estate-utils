import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatCard from '../examples/react-component';

describe('StatCard', () => {
  it('renders label and value', () => {
    render(<StatCard label="Rentabilité" value="7.2%" />);
    expect(screen.getByText('Rentabilité')).toBeInTheDocument();
    expect(screen.getByText('7.2%')).toBeInTheDocument();
  });
  it('applies custom color', () => {
    render(<StatCard label="Score" value="85" color="#34d399" />);
    expect(screen.getByText('85')).toHaveStyle({ color: '#34d399' });
  });
});
