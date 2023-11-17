import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBreedByIdQuery } from '../../../services/breeds';
import { useGetImagesQuery } from '../../../services/images';

interface BreedDetailsProps {
  id: string;
  name: string;
  temperament: string;
  weight: {
    metric: string;
  };
  height: {
    metric: string;
  };
  lifeSpan: string;
  origin: string;
}

const BreedDetails = () => {
  const { breed_id: breedId } = useParams();
  const stringBreedId = breedId as string;
  const [isFavorite, setIsFavorite] = useState(false);

  const breedQuery = useGetBreedByIdQuery(stringBreedId);
  const imagesQuery = useGetImagesQuery({ limit: 5 });

  useEffect(() => {}, []);

  if (breedQuery.isError) {
    return <div>Error: {breedQuery.error?.message}</div>;
  }

  if (breedQuery.isLoading || imagesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  const { data, error } = breedQuery;

  if (error || !data || !data.name) {
    return <div>Error: {error ? error.message : 'No data found'}</div>;
  }

  const { name, weight, height, lifeSpan, origin, temperament } =
    data as BreedDetailsProps;

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      {/* <p style={{ padding: '220px' }}>{stringBreedId} </p> */}
      <div>
        <img src={imagesQuery.data?.[0]?.url || ''} alt={name} />
        <button type="button" onClick={handleFavoriteToggle}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <div>
        <h1>{name}</h1>
        <p>Weight Range: {weight.metric || 'N/A'}</p>
        <p>Height: {height.metric || 'N/A'}</p>
        <p>Life span: {lifeSpan || 'N/A'}</p>
        <p>Origin: {origin || 'N/A'}</p>
        <p>Temperament: {temperament || 'N/A'}</p>
      </div>
    </div>
  );
};

export default BreedDetails;
