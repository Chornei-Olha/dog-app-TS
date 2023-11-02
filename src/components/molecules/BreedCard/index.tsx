import React, { useState } from 'react';

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
    <div
      className="breed-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{temperament}</p>

      {isHovered && (
        <div className="more-info">
          <p>{moreInfo}</p>
        </div>
      )}
    </div>
  );
};

export default BreedCard;
