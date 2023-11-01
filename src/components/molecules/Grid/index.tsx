import { Box, styled } from '@mui/material';
import { GridCard } from '../GridCard';

const List = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  gridAutoFlow: 'dense'
}));

const Item = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  minWidth: '200px',

  '&:nth-of-type(1)': {
    gridColumn: '1 / 3;',
    gridRow: 'span 2'
  },

  '&:nth-of-type(2)': {
    gridColumn: '3 / 4',
    gridRow: 'span 1'
  },

  '&:nth-of-type(3)': {
    gridColumn: '4 / 5',
    gridRow: 'span 2'
  },

  '&:nth-of-type(4)': {
    gridColumn: '3 / 4',
    gridRow: 'span 2'
  },

  '&:nth-of-type(5)': {
    gridColumn: '1 / 2',
    gridRow: 'span 2'
  },

  '&:nth-of-type(10)': {
    gridColumn: '4 / 5',
    gridRow: 'span 1'
  }
}));

const imagesList = [
  'https://picsum.photos/id/237/570/419',
  'https://picsum.photos/id/238/570/419',
  'https://picsum.photos/id/239/570/419',
  'https://picsum.photos/id/242/570/419',
  'https://picsum.photos/id/237/570/419',
  'https://picsum.photos/id/237/570/419',
  'https://picsum.photos/id/237/570/419',
  'https://picsum.photos/id/237/570/419',
  'https://picsum.photos/id/237/570/419',
  'https://picsum.photos/id/237/570/419'
];

export const Grid = () => (
  <List>
    {imagesList.map((item, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={idx}>
        <GridCard imgUrl={item} />
      </Item>
    ))}
  </List>
);
