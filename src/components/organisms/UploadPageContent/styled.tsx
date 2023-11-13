import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BoxUpload = styled(Box)(() => ({
  borderRadius: '20px',
  backgroundColor: '#FFF',
  maxWidth: '600px',
  width: '100%',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TitleUpload = styled(Typography)(() => ({
  marginBottom: '32px'
}));

const UploadImage = styled(Box)(({ theme: { palette } }) => ({
  position: 'relative',
  maxWidth: '400px',
  width: '100%',
  minHeight: '230px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  border: `1px dashed ${palette.common.black}`
}));

const DefaultImage = styled(Box)(() => ({
  position: 'relative',
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export { BoxUpload, UploadImage, TitleUpload, DefaultImage };
