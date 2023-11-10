import { Box, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { AddFavoriteIcon } from '../../atoms/AddFavoriteIcon';
import ModalDialog from '../../atoms/ModalDialog';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation
} from '../../../services/favorite';
import ArrowIcon from '../../../assets/icons/ArrowIcon.svg?react';
import PawIcon from '../../../assets/icons/PawIcon.svg?react';
import { WrapActions, CardActionsTop, CardActionsBottom } from './styled';

export interface GridCardActionsProps {
  id: string | number;
  isFavorite?: boolean;
  breed?: string;
  cardType: 'main' | 'upload';
}

export const GridCardActions = ({
  id,
  isFavorite = false,
  breed = 'learn more',
  cardType = 'main'
}: GridCardActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const addToFavorite = () => {
    addFavorite({ image_id: id });
  };

  const deleteFromFavorite = () => {
    deleteFavorite({ favourite_id: id });
    setIsOpenDeleteModal(false);
  };

  return (
    <>
      <ModalDialog
        title="Delete the photo?"
        description="You will not be able to  recover it"
        textBtnClose="Cancel"
        textBtnConfirm="Delete"
        open={isOpenDeleteModal}
        confirm={deleteFromFavorite}
        onClose={() => setIsOpenDeleteModal(false)}
      />
      <WrapActions
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionsTop>
          <IconButton onClick={addToFavorite} aria-label="add to favorites">
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
                <Button
                  onClick={() => {
                    setIsOpenDeleteModal(true);
                  }}
                >
                  delete
                </Button>
              </Box>
            )}
          </CardActionsBottom>
        )}
      </WrapActions>
    </>
  );
};
