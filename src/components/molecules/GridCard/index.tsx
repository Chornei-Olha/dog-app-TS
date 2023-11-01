import { Button, Card, CardMedia, alpha } from '@mui/material';

import { AddFavoriteIcon } from '../../atoms/AddFavoriteIcon';
import BorderedBox from '../../atoms/BorderedBox';
import theme from '../../../theme/theme';
import { WrapActions, WrapIcon, WrapBtn } from './styled';

export const GridCard = ({ imgUrl }: any) => (
  <BorderedBox
    showHovered
    boxShadow={alpha(theme.palette.primary.main, 1)}
    height="100%"
  >
    <Card
      sx={{
        borderRadius: '20px',
        boxShadow: 'none',
        position: 'relative',
        height: '100%'
      }}
    >
      <CardMedia
        component="img"
        image={imgUrl || 'https://picsum.photos/id/237/570/419'}
        alt="item"
        sx={{ height: '100%', objectFit: 'cover' }}
      />

      <WrapActions>
        <WrapIcon aria-label="add to favorites">
          <AddFavoriteIcon state="hover" />
        </WrapIcon>
        <WrapBtn>
          <Button variant="contained" color="secondary" onClick={() => {}}>
            Goldendoodle
          </Button>
        </WrapBtn>
      </WrapActions>
    </Card>
  </BorderedBox>
);
