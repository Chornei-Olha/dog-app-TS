import { Box, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { AddFavoriteIcon } from '../../atoms/AddFavoriteIcon';
import { useAddFavoriteMutation } from '../../../services/favorite';
import ArrowIcon from '../../../assets/icons/ArrowIcon.svg?react';
import PawIcon from '../../../assets/icons/PawIcon.svg?react';
import { WrapActions, CardActionsTop, CardActionsBottom } from './styled';

export interface GridCardActionsProps {
  id: string;
  isFavorite: boolean;
  breed?: string;
  cardType: 'main' | 'upload';
}

export const GridCardActions = ({
  id,
  isFavorite,
  breed = 'learn more',
  cardType = 'main'
}: GridCardActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addFavorite] = useAddFavoriteMutation();

  const handleAddFavorite = () => {
    addFavorite({ image_id: id });
  };

  return (
    <WrapActions
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionsTop>
        <IconButton onClick={handleAddFavorite} aria-label="add to favorites">
          <AddFavoriteIcon state={isFavorite ? 'active' : 'default'} />
        </IconButton>
      </CardActionsTop>
      {isHovered && (
        <CardActionsBottom>
          {cardType === 'main' && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <NavLink to="/breeds">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PawIcon />}
                  endIcon={<ArrowIcon />}
                >
                  {breed}
                </Button>
              </NavLink>
            </Box>
          )}
          {cardType === 'upload' && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start'
              }}
            >
              <Button>delete</Button>
            </Box>
          )}
        </CardActionsBottom>
      )}
    </WrapActions>
  );
};
