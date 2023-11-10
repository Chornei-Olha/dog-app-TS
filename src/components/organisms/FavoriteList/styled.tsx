import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const List = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '20px'
}));

const ListItem = styled(Box)(() => ({
  width: '100%',
  height: '400px'
}));

export { List, ListItem };
