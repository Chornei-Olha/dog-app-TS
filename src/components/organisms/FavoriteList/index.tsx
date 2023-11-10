import { FavoritesResponse } from '../../../services/favorite';
import { GridCard } from '../../molecules/GridCard';
import { List, ListItem } from './styled';

interface FavoriteListProps {
  favoritesData: FavoritesResponse[];
}

export const FavoriteList = ({ favoritesData }: FavoriteListProps) => (
  <List>
    {(favoritesData || []).map(item => (
      <ListItem>
        <GridCard
          key={item.id}
          id={item.id}
          imgUrl={item.image.url}
          isFavorite
          cardType="upload"
        />
      </ListItem>
    ))}
  </List>
);
