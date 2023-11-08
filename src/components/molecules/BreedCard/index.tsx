import React, { useState } from 'react';
import BorderedBox from '../../atoms/BorderedBox';
import { Link } from '@mui/material';

interface BreedCardProps {
  image: string;
  name: string;
  temperament: string;
  moreInfo: string;
}

const BreedCard: React.FC<BreedCardProps> = ({
  image,
  name,
  temperament,
  moreInfo
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BorderedBox
      sx={{
        width: '100%',
        margin: '0'
      }}
    >
      <div
        className="breed-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{temperament}</p>

        {isHovered && (
          <div className="more-info">{/* <p>{moreInfo}</p> */}</div>
        )}

        {moreInfo && (
          <Link href="/" variant="inherit" underline="hover">
            more...
          </Link>
        )}
      </div>
    </BorderedBox>
  );
};

export default BreedCard;
