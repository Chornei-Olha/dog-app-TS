import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import LogoIcon from '../../../assets/icons/Cat Footprint.svg?react';
import { useGetImagesIdQuery } from '../../../services/images';
import BorderedBox from '../../atoms/BorderedBox';
import { GridCardActions } from '../../molecules/GridCardActions';

import {
  useGetBreedByIdQuery,
  useGetBreedsQuery
} from '../../../services/breeds';
import { borderedGeneralBox, borderedBox, cardActionsTop } from './styled';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import quotes from '../../../assets/icons/Quotes.svg';
import { shadowTopWrap, shadowBottomWrap, quotesStyle } from './styled';

interface BreedDetailsProps {
  id: string | number;
  isFavorite?: boolean;
}
export const BreedDetails = ({ id, isFavorite = false }: BreedDetailsProps) => {
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

  const { breed_id: breedId } = useParams();
  const [isHovered, setIsHovered] = useState(false);
  const { data: breedById } = useGetBreedByIdQuery(String(breedId));
  const { data: imageById } = useGetImagesIdQuery({
    breed_id: Number(breedId)
  });

  // eslint-disable-next-line no-nested-ternary
  const iconState = isFavorite ? 'active' : isHovered ? 'hover' : 'default';

  return (
    <div style={{ ...gridStyles, paddingBottom: '10px' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={shadowTop} alt="" style={shadowTopWrap} />

        <BorderedBox
          borderRadius={0}
          sx={{ ...borderedGeneralBox }}
          showHovered={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imageById?.[0]?.url || 'http://via.placeholder.com/640x360'}
            alt={`${breedById?.name}`}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </BorderedBox>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridGap: '17px',
          margin: '0 auto'
        }}
      >
        <BorderedBox borderRadius={20} sx={borderedBox}>
          <img
            src={imageById?.[1]?.url || 'http://via.placeholder.com/640x360'}
            alt={`${breedById?.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </BorderedBox>
        <BorderedBox borderRadius={20} sx={borderedBox}>
          <img
            src={imageById?.[2]?.url || 'http://via.placeholder.com/640x360'}
            alt={`${breedById?.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </BorderedBox>
        <BorderedBox borderRadius={20} sx={borderedBox}>
          <img
            src={imageById?.[3]?.url || 'http://via.placeholder.com/640x360'}
            alt={`${breedById?.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </BorderedBox>
        <BorderedBox borderRadius={20} sx={borderedBox}>
          <img
            src={imageById?.[4]?.url || 'http://via.placeholder.com/640x360'}
            alt={`${breedById?.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </BorderedBox>
      </div>
      <div>
        <h1>{breedById?.name}</h1>
        <SvgIcon component={LogoIcon} inheritViewBox />
        <p>
          Weight Range:{' '}
          <span style={{ color: '#ADA7B8' }}>
            {breedById?.weight?.metric || 'Н/Д'} kg
          </span>
        </p>
        <p>
          Height:{' '}
          <span style={{ color: '#ADA7B8' }}>
            {breedById?.height?.metric || 'Н/Д'} sm{' '}
          </span>
        </p>
        <p>
          Life span:{' '}
          <span style={{ color: '#ADA7B8' }}>
            {breedById?.life_span || 'Н/Д'}{' '}
          </span>
        </p>
        <p>
          Bred for:{' '}
          <span style={{ color: '#ADA7B8' }}>
            {breedById?.bred_for || 'Н/Д'}
          </span>
        </p>
        <p>
          Temperament:{' '}
          <span style={{ color: '#ADA7B8' }}>
            {breedById?.temperament || 'Н/Д'}
          </span>
        </p>
      </div>
      <img src={quotes} alt="" style={quotesStyle} />
      <img src={shadowBottom} alt="" style={shadowBottomWrap} />
    </div>
  );
};
export default BreedDetails;
