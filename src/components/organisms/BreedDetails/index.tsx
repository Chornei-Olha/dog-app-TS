import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBreedImagesQuery } from '../../../services/images';
import BorderedBox from '../../atoms/BorderedBox';
import { BreedCardStyled } from '../../molecules/BreedCard/styled';
import { useGetBreedsQuery } from '../../../services/breeds';

interface BreedDetailsProps {
  key: string;
  id: number;
  name: string;
  temperament: string;
  reference_image_id: string;
}

const BreedDetails: React.FC<BreedDetailsProps> = () => {
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
  const { breed_id: breedId } = useParams<{ breed_id?: string }>();
  const { data: breeds } = useGetBreedsQuery();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { data: breedImages } = useGetBreedImagesQuery(breedId);

  useEffect(() => {}, [breedId, breedImages]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={gridStyles}>
      <BorderedBox
        borderRadius={20}
        sx={{
          width: '100%',
          height: '60vh',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
        showHovered={isHovered}
      >
        {breeds && breedImages && breedImages.length > 0 && (
          <BreedCardStyled
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={breeds[0].id}
            id={breeds[0].id}
            referenceImageId={breeds[0].reference_image_id}
          >
            <img
              src={breedImages?.url || 'http://via.placeholder.com/640x360'}
              alt={`Breed ${breedId} - ${name}`}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
          </BreedCardStyled>
        )}
        <button type="button" onClick={handleFavoriteToggle}>
          {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        </button>
      </BorderedBox>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridTemplateRows: '4fr',
          gridGap: '17px',
          margin: '0 auto',
          overflowX: 'hidden'
        }}
      >
        <BorderedBox
          borderRadius={20}
          sx={{
            width: '100%',
            height: '10vh',
            margin: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src={breedImages?.url || 'http://via.placeholder.com/640x360'}
            alt={`Breed ${breedId} - ${name}`}
            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
        </BorderedBox>
        <BorderedBox
          borderRadius={20}
          sx={{
            width: '100%',
            height: '10vh',
            margin: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src={breedImages?.url || 'http://via.placeholder.com/640x360'}
            alt={`Breed ${breedId} - ${name}`}
            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
        </BorderedBox>
        <BorderedBox
          borderRadius={20}
          sx={{
            width: '100%',
            height: '10vh',
            margin: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src={breedImages?.url || 'http://via.placeholder.com/640x360'}
            alt={`Breed ${breedId} - ${name}`}
            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
        </BorderedBox>
        <BorderedBox
          borderRadius={20}
          sx={{
            width: '100%',
            height: '10vh',
            margin: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src={breedImages?.url || 'http://via.placeholder.com/640x360'}
            alt={`Breed ${breedId} - ${name}`}
            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
        </BorderedBox>
      </div>
      <div>
        <h1>{name}</h1>
        <p>Weight Range: {weight?.metric || 'Н/Д'}</p>
        <p>Height: {height?.metric || 'Н/Д'}</p>
        <p>Life span: {life_span || 'Н/Д'}</p>
        <p>Bred for: {bred_for || 'Н/Д'}</p>
        <p>Temperament: {temperament || 'Н/Д'}</p>
      </div>
    </div>
  );
};

export default BreedDetails;
