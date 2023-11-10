import { Pagination } from '@mui/material';
import { useState } from 'react';

import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import { useGetFavoritesQuery } from '../../../services/favorite';
import { FavoriteList } from '../FavoriteList';
import { Wrap, Container, ShadowTopWrap, ShadowBottomWrap } from './styled';

export const FavoritePage = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useGetFavoritesQuery({
    limit: 10,
    page
  });
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
        {isLoading && <div>Loading...</div>}
        {data && <FavoriteList favoritesData={data} />}

        <Pagination
          count={2}
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
