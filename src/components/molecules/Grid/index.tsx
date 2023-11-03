import { Box, styled } from '@mui/material';

import { GridCard } from '../GridCard';
import { useGetImagesQuery } from '../../../services/images';

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
  gridRow: 'span 1',

  '&:nth-of-type(1)': {
    gridColumn: '1/3;',
    gridRow: '1/3'
  },

  '&:nth-of-type(2)': {
    gridColumn: '3 / 4',
    gridRow: 'span 1'
  },

  '&:nth-of-type(3)': {
    gridColumn: '4 / 5',
    gridRow: '1/3'
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

export const Grid = () => {
  const { data: images } = useGetImagesQuery({ limit: 10, page: 0 });
  return (
    <List>
      {(images || []).map(item => (
        <Item key={item.id}>
          <GridCard imgUrl={item.url} />
        </Item>
      ))}
    </List>
  );
};
