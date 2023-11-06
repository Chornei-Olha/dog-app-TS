import React, { useState } from 'react';
import BreedCard from '../../molecules/BreedCard';

// import {
//   useGetBreedsQuery,
//   useGetBreedImagesQuery
// } from '../../../services/api';
import { useGetImagesQuery } from '../../../services/images';

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

const BreedList: React.FC<BreedListProps> = ({ breedsData }) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridGap: '22px',
    margin: '0 140px'
  };
  const [page, setPage] = useState(1);

  const { data: images, isLoading } = useGetImagesQuery({ limit: 10, page });

  return (
    <div className="breed-list" style={gridStyles}>
      {breedsData.map((breed, index) => (
        <BreedCard
          key={breed.id}
          name={breed.name}
          image={images?.[index]?.url || breed.image}
          temperament={breed.temperament}
          moreInfo={breed.moreInfo}
        />
      ))}
    </div>
  );
};
export default BreedList;
