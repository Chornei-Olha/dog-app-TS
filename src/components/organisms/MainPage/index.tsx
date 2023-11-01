import { Pagination } from '@mui/material';
import shadowBottom from '../../../assets/img/mainPage/shadow/shadow-1.svg';
import shadowTop from '../../../assets/img/mainPage/shadow/shadow-2.svg';
import {
  Wrap,
  Container,
  ShadowTopWrap,
  ShadowBottomWrap,
  FiltersWrap,
  PaginationWrap
} from './styled';
import { Grid } from '../../molecules/Grid';

export const MainPage = () => (
  <Wrap>
    <ShadowTopWrap>
      <img src={shadowTop} alt="" />
    </ShadowTopWrap>
    <Container>
      <FiltersWrap sx={{ marginBottom: 2 }}>Filters</FiltersWrap>
      <Grid />
      <PaginationWrap
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Pagination count={10} showFirstButton showLastButton />
      </PaginationWrap>
    </Container>
    <ShadowBottomWrap>
      <img src={shadowBottom} alt="" />
    </ShadowBottomWrap>
  </Wrap>
);
