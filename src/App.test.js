import { render, screen } from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jayeeta/i);
  expect(linkElement).toBeInTheDocument();

  const input=screen.getByRole("textbox")
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username")
  expect(input).toHaveAttribute("id", "userId")

  const placeholder=screen.getByPlaceholderText("type here")
  expect(placeholder).toBeInTheDocument();
});
 