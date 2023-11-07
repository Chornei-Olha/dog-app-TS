import { Button, Card, CardMedia, alpha } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { AddFavoriteIcon } from '../../atoms/AddFavoriteIcon';
import BorderedBox from '../../atoms/BorderedBox';
import theme from '../../../theme/theme';
import { WrapActions, WrapTop, WrapBtn } from './styled';
import { useAddFavoriteMutation } from '../../../services/favorite';

type GridCardProps = {
  id: string;
  imgUrl: string;
};

export const GridCard = ({ id, imgUrl }: GridCardProps) => {
  const [addFavorite] = useAddFavoriteMutation();

  const handleAddFavorite = () => {
    addFavorite({ image_id: id });
  };

  return (
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
          <WrapTop>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddFavorite}
              aria-label="add to favorites"
            >
              <AddFavoriteIcon state="hover" />
            </Button>
          </WrapTop>
          <WrapBtn>
            <NavLink to="/breeds">
              <Button variant="contained" color="secondary">
                Goldendoodle
              </Button>
            </NavLink>
          </WrapBtn>
        </WrapActions>
      </Card>
    </BorderedBox>
  );
};
