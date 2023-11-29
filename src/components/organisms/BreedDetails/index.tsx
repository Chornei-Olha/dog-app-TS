import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBreedByIdQuery } from '../../../services/breeds';
import { useGetBreedImagesQuery } from '../../../services/images'; // Используем новый хук для изображений

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

  // Используем хук для запроса данных о породе
  const breedQuery = useGetBreedByIdQuery(stringBreedId);

  // Используем хук для запроса изображений для конкретной породы
  const imagesQuery = useGetBreedImagesQuery({ breedId: stringBreedId });

  useEffect(() => {
    // Ваши дополнительные действия при монтировании компонента
  }, []);

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
      <p style={{ padding: '220px' }}>{stringBreedId} </p>
      <div>
        <div>
          {imagesQuery.data &&
            imagesQuery.data.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Breed ${index + 1} - ${name}`}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
            ))}
        </div>
        <button type="button" onClick={handleFavoriteToggle}>
          {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        </button>
      </div>
      <div>
        <h1>{name}</h1>
        <p>Диапазон веса: {weight.metric || 'Н/Д'}</p>
        <p>Высота: {height.metric || 'Н/Д'}</p>
        <p>Продолжительность жизни: {lifeSpan || 'Н/Д'}</p>
        <p>Происхождение: {origin || 'Н/Д'}</p>
        <p>Темперамент: {temperament || 'Н/Д'}</p>
      </div>
    </div>
  );
};

export default BreedDetails;
