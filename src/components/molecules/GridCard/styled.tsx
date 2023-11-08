import { Box, CardActions } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const WrapActions = styled(CardActions)(({ theme: { palette } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: alpha(palette.common.black, 0.2)
  }
}));

const WrapTop = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
}));
const WrapBtn = styled(Box)(() => ({}));

export { WrapActions, WrapTop, WrapBtn };
