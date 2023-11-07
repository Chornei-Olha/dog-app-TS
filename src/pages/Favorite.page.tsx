import { Box } from '@mui/material';
import { useGetFavoritesQuery } from '../services/favorite';

export const Favorite = () => {
  const { data, isLoading } = useGetFavoritesQuery();
  return (
    <Box sx={{ paddingTop: '80px' }}>
      <div>Favorite</div>
      {isLoading && <div>Loading...</div>}
      {data && data.map(item => <div key={item.id}>{item.id}</div>)}
    </Box>
  );
};
