import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

interface CustomBoxProps extends BoxProps {
  borderRadius?: number;
  height?: number;
  active?: boolean;
}

const CustomBox = styled(Box)<CustomBoxProps>(
  ({ theme, borderRadius, height, active }) => ({
    borderRadius: borderRadius || 20,
    height: height || 50,
    boxShadow: active
      ? `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
      : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: active ? `6px 6px 8px 0px #921FED` : 'none'
    },
    '&:active': {
      boxShadow: active
        ? `6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
        : 'none'
    }
  })
);

export default CustomBox;

