import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrap = styled(Box)(() => ({
  position: 'relative',
  paddingTop: '100px',
  minHeight: '100vh'
}));

const Container = styled(Box)(() => ({
  position: 'relative',
  maxWidth: 1200,
  width: '100%',
  margin: '0 auto',
  padding: '0 15px'
}));

const ShadowTopWrap = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: -1,
  maxWidth: '400px',

  img: {
    width: '100%'
  }
}));

const ShadowBottomWrap = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: -1,
  maxWidth: '400px',

  img: {
    width: '100%'
  }
}));

const FiltersWrap = styled(Box)(({ theme: { palette } }) => ({
  position: 'relative',
  width: '100%',
  backgroundColor: palette.background.paper,
  textAlign: 'center'
}));

const PaginationWrap = styled(Box)(({ theme: { palette } }) => ({
  position: 'relative',
  width: '100%',
  backgroundColor: palette.background.paper,
  textAlign: 'right'
}));

export {
  Wrap,
  Container,
  ShadowTopWrap,
  ShadowBottomWrap,
  FiltersWrap,
  PaginationWrap
};
