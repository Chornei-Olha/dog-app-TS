import React, { useState } from 'react';
// import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import BorderedBox from '../../atoms/BorderedBox';
import { BreedCardStyled, BreedCardText } from './styled';
// import { AddFavoriteIcon } from '../../atoms/AddFavoriteIcon';
// import {
//   useAddFavoriteMutation,
//   useDeleteFavoriteMutation
// } from '../../../services/favorite';

interface BreedCardProps {
  id: number | string;
  // isFavorite?: boolean;
  image: string;
  name: string;
  temperament: string;
}

const MAX_CHARACTERS = 45;

const BreedCard: React.FC<BreedCardProps> = ({
  id,
  // isFavorite,
  image,
  name,
  temperament
}) => {
  // const [addFavorite] = useAddFavoriteMutation();
  // const [deleteFavorite] = useDeleteFavoriteMutation();
  // const [favorite, setFavorite] = useState(isFavorite || false);

  // const addToFavorite = () => {
  //   addFavorite({ image_id: id });
  //   setFavorite(true);
  // };

  // const deleteFromFavorite = () => {
  //   deleteFavorite({ favorite_id: id });
  //   setFavorite(false);
  // };

  const [isHovered, setIsHovered] = useState(false);
  const trimmedTemperament =
    temperament && temperament.length > MAX_CHARACTERS
      ? `${temperament.slice(0, MAX_CHARACTERS)} ...`
      : temperament;

  return (
    <BorderedBox
      borderRadius={20}
      sx={{
        width: '17vw',
        height: '40vh',
        margin: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
      showHovered={isHovered}
    >
      {/* <IconButton
        onClick={favorite ? deleteFromFavorite : addToFavorite}
        aria-label="add to favorites"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          zIndex: '10'
        }}
      >
        <AddFavoriteIcon state={favorite ? 'active' : 'default'} />
      </IconButton> */}

      <BreedCardStyled
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '68%',
            objectFit: 'cover',
            borderRadius: '20px'
          }}
        />
        <BreedCardText>
          <h2
            style={{
              marginBottom: '5px',
              fontSize: '26px'
            }}
          >
            {name}
          </h2>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>
            Temperamente: {trimmedTemperament}
          </p>
        </BreedCardText>
        {isHovered && (
          <div
            className="more-info"
            style={{ marginLeft: '80%', marginBottom: '5%', zIndex: '5' }}
          >
            <NavLink to={`/breeds/${id}`} style={{ zIndex: 5 }}>
              {' '}
              more
            </NavLink>
          </div>
        )}
      </BreedCardStyled>
    </BorderedBox>
  );
};

export default BreedCard;
