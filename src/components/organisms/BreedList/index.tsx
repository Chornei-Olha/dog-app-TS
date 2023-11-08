import React, { useState, useEffect } from 'react';
import BreedCard from '../../molecules/BreedCard';
import { useGetImagesQuery } from '../../../services/images';
import { useGetBreedsQuery } from '../../../services/breeds';
import { Pagination } from '@mui/material';

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

const perPage = 6;

const BreedList: React.FC<BreedListProps> = () => {
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridGap: '22px',
    margin: '0 140px'
  };

  const { data: breeds, isLoading: isLoadingBreeds } = useGetBreedsQuery();
  const [page, setPage] = useState(1);
  const { data: images, isLoading: isLoadingImages } = useGetImagesQuery({
    limit: perPage * page
  });

  const breedSlice = breeds?.slice(0, page * perPage) || [];

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className="breed-list" style={gridStyles}>
      {breedSlice.map((breed, index) => (
        <BreedCard
          key={breed.id}
          name={breed.name}
          image={images?.[index]?.url || ''}
          temperament={breed.temperament}
          moreInfo={breed.moreInfo}
        />
      ))}
      {breeds && breeds.length > perPage && (
        <Pagination
          count={Math.ceil(breeds.length / perPage)}
          page={page}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BreedList;
