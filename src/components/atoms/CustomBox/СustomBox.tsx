import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

interface CustomBoxProps extends BoxProps {
  borderRadius?: number;
  height?: number;
  showHovered: boolean;
}

const CustomBox = styled(Box)<CustomBoxProps>(
  ({ theme, borderRadius, height, showHovered }) => ({
    borderRadius: borderRadius || 20,
    height: height || 50,
    boxShadow: `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`,
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: showHovered
        ? `6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
        : `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
    },
    '&:active': {
      boxShadow: showHovered
        ? `6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
        : `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
    },
    'data-testid': 'custom-box'
  })
);

export default CustomBox;
