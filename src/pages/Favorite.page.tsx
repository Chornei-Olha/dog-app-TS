import { Box } from '@mui/material';
import { useGetFavoritesQuery } from '../services/favorite';

export const Favorite = () => {
  const { data: favorites, isLoading } = useGetFavoritesQuery();
  return (
    <Box sx={{ paddingTop: '80px' }}>
      <div>Favorite</div>
      {isLoading && <div>Loading...</div>}
      {favorites && <div>test</div>}
    </Box>
  );
};
