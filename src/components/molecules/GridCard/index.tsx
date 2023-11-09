import { CardMedia, alpha } from '@mui/material';
import theme from '../../../theme/theme';
import { CardBorder, CardBox } from './styled';
import { GridCardActions } from '../GridCardActions';

export interface GridCardProps {
  id: string;
  imgUrl: string;
  isFavorite: boolean;
  breed?: string;
  cardType: 'main' | 'upload';
}

export const GridCard = ({
  id,
  imgUrl,
  isFavorite,
  breed = 'learn more',
  cardType = 'main'
}: GridCardProps) => (
  <CardBorder showHovered boxShadow={alpha(theme.palette.primary.main, 1)}>
    <CardBox>
      <CardMedia
        component="img"
        image={imgUrl || 'http://via.placeholder.com/640x360'}
        alt="item"
        sx={{ height: '100%', objectFit: 'cover' }}
      />
      <GridCardActions
        id={id}
        isFavorite={isFavorite}
        breed={breed}
        cardType={cardType}
      />
    </CardBox>
  </CardBorder>
);
