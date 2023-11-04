import { Pagination } from '@mui/material';
import { useState } from 'react';

import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import {
  Wrap,
  Container,
  ShadowTopWrap,
  ShadowBottomWrap,
  FiltersWrap
} from './styled';
import { Grid } from '../../molecules/Grid';
import { useGetImagesQuery } from '../../../services/images';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const { data: images, isLoading } = useGetImagesQuery({ limit: 10, page });

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Wrap>
      <ShadowTopWrap>
        <img src={shadowTop} alt="" />
      </ShadowTopWrap>
      <Container>
        <FiltersWrap sx={{ marginBottom: 2 }}>Filters</FiltersWrap>
        {isLoading && <div>Loading...</div>}
        {images && <Grid listImages={images} />}

        <Pagination
          count={3}
          showFirstButton
          showLastButton
          page={page}
          onChange={handleChangePage}
        />
      </Container>
      <ShadowBottomWrap>
        <img src={shadowBottom} alt="" />
      </ShadowBottomWrap>
    </Wrap>
  );
};
