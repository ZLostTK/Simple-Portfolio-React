import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders loading screen initially', () => {
    render(<App />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Cargando experiencia...')).toBeInTheDocument();
  });
});
