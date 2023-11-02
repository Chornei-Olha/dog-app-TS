import React from 'react';
import BreedCard from '../../molecules/BreedCard';

interface Breed {
  id: number;
  name: string;
  image: string;
  temperament: string;
  moreInfo: string;
}

interface BreedListProps {
  breedsData: Breed[];
}

const BreedList: React.FC<BreedListProps> = ({ breedsData }) => (
  <div className="breed-list">
    {breedsData.map(breed => (
      <BreedCard
        key={breed.id}
        name={breed.name}
        image={breed.image}
        temperament={breed.temperament}
        moreInfo={breed.moreInfo}
      />
    ))}
  </div>
);

export default BreedList;
