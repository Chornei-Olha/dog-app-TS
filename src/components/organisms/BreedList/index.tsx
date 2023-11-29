import React, { useState, useEffect, useMemo } from 'react';
import { Pagination } from '@mui/material';
import BreedCard from '../../molecules/BreedCard';
import { useGetBreedsQuery } from '../../../services/breeds';
import { useGetBreedImagesQuery } from '../../../services/images';

interface Breed {
  key: string;
  id: number;
  name: string;
  temperament: string;
  reference_image_id: string;
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

  const { data: breeds } = useGetBreedsQuery();
  const [page, setPage] = useState(1);
  // const [images, setImages] = useState<string[]>([]);

  const breedSlice = useMemo(
    () => breeds?.slice((page - 1) * perPage, page * perPage) || [],
    [breeds, page]
  );
  console.log('breedSlice', breedSlice);
  const filteredBreedIds = breedSlice
    .filter(
      breed =>
        breed.reference_image_id && typeof breed.reference_image_id === 'string'
    )
    .map(breed => breed.reference_image_id);
  console.log('filteredBreedIds', filteredBreedIds);

  const { data: breedImages } = useGetBreedImagesQuery(filteredBreedIds);

  useEffect(() => {
    if (breedImages) {
      const breedImageUrls: string[] = [];

      breedSlice.forEach(breed => {
        const imagesArray = breedImages[breed.reference_image_id];

        if (imagesArray && imagesArray.length > 0) {
          const imageUrl = imagesArray[0].url;
          breedImageUrls.push(imageUrl);
        } else {
          // Handle the case when no images are available for a breed
          breedImageUrls.push(''); // or provide a default image URL
        }
      });

      setImages(breedImageUrls);
    }
  }, [breedImages, breedSlice]);

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
        {breedSlice.map(breed => (
          <BreedCard
            key={breed.id}
            id={breed.id}
            name={breed.name}
            temperament={breed.temperament}
            referenceImageId={breed.reference_image_id}
          />
        ))}
        {breeds && breeds.length && breeds.length > perPage && (
          <Pagination
            count={Math.ceil((breeds.length || 0) / perPage)}
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
