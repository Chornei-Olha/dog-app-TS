import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import BreedCard from '../../molecules/BreedCard';
import { useGetImagesQuery } from '../../../services/images';
import { useGetBreedsQuery } from '../../../services/breeds';

interface Breed {
  id: number;
  name: string;
  image: string;
  temperament: string;
}

interface BreedListProps {
  breedsData: Breed[];
}

const perPage = 6;

const BreedList: React.FC<BreedListProps> = () => {
  const gridStyles = {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    gridGap: '22px',
    margin: '0 auto',
    padding: '191px 15px 0 15px',
    overflowX: 'hidden'
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
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <div className="breed-list" style={gridStyles}>
        {breedSlice.map((breed, index) => (
          <BreedCard
            id={breed.id}
            name={breed.name}
            image={images?.[index]?.url || ''}
            temperament={breed.temperament}
          />
        ))}
        {breeds && breeds.length && breeds.length > perPage && (
          <Pagination
            count={Math.ceil(breeds.length / perPage)}
            page={page}
            onChange={handlePageChange}
            sx={{
              margin: '20px auto 20px auto'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BreedList;
