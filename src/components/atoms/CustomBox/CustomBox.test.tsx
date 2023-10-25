import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';
import CustomBox from './СustomBox';
import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

describe('CustomBox', () => {
  it('should render without errors', () => {
    render(<CustomBox data-testid="custom-box" showHovered={false} />);
    expect(screen.getByTestId('custom-box')).toBeInTheDocument();
    expect('custom-box').toMatchSnapshot();
  });

  it('the default state should be a black shadow', () => {
    render(<CustomBox data-testid="custom-box" showHovered={false} />);
    const customBox = screen.getByTestId('custom-box');
    expect(customBox).toHaveStyle(
      `box-shadow: 6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
    );
    expect('custom-box').toMatchSnapshot();
  });

  it('should have a black shadow when transmitting this props', () => {
    render(<CustomBox data-testid="custom-box" showHovered={false} />);
    const customBox = screen.getByTestId('custom-box');
    userEvent.hover(customBox);
    expect(customBox).toHaveStyle(
      `box-shadow: 6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
    );
    expect('custom-box').toMatchSnapshot();
  });

  it('should have a main shadow when transmitting this props', () => {
    render(<CustomBox data-testid="custom-box" showHovered={true} />);
    const customBox = screen.getByTestId('custom-box');
    userEvent.hover(customBox);
    expect(customBox).toHaveStyle(
      `box-shadow: 6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
    );
    expect('custom-box').toMatchSnapshot();
  });
});
