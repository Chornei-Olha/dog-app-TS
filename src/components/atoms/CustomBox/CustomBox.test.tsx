import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import CustomBox from './СustomBox';

describe('CustomBox', () => {
  it('should render without errors', () => {
    render(<CustomBox showHovered={false} />);
    expect(screen.getByTestId('custom-box')).toBeInTheDocument();
  });

  it('the default state should be a black shadow', () => {
    render(<CustomBox showHovered={false} />);
    const customBox = screen.getByTestId('custom-box');
    expect(customBox).toHaveStyle(
      'box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1)'
    );
  });

  it('should have a black shadow when transmitting this props', () => {
    render(<CustomBox showHovered={false} />);
    const customBox = screen.getByTestId('custom-box');
    userEvent.hover(customBox);
    expect(customBox).toHaveStyle(
      'box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1)'
    );
  });

  it('should have a main shadow when transmitting this props', () => {
    render(<CustomBox showHovered={true} />);
    const customBox = screen.getByTestId('custom-box');
    userEvent.hover(customBox);
    expect(customBox).toHaveStyle('box-shadow: 6px 6px 8px 0px #921FED');
  });
});
