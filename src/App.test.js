import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Raza Arts brand', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Raza Arts/i)[0];
  expect(linkElement).toBeInTheDocument();
});
