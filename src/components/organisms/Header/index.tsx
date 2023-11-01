import { Stack, SvgIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';

import LogoIcon from '../../../assets/icons/Logo.svg?react';
import { Menu } from '../../atoms/Menu';
import { UploadPageIcon } from '../../atoms/UploadPageIcon';
import { FavoritePageIcon } from '../../atoms/FavoritePageIcon';
import { menuHeader } from '../../../utils/const';
import { Wrap, Logo, LogoDog, LogoStarGallery, Container } from './styled';

const Header = () => (
  <Wrap position="static" sx={{ backgroundColor: 'ADA7B8' }}>
    <Container>
      <Logo to="/">
        <LogoDog>Dog</LogoDog>
        <SvgIcon component={LogoIcon} inheritViewBox />
        <LogoStarGallery>Star Gallery</LogoStarGallery>
      </Logo>

      <Menu menuList={menuHeader} />

      <Stack spacing={1} direction="row">
        <NavLink to="/favorite">
          {({ isActive }) => (
            <FavoritePageIcon state={isActive ? 'active' : 'default'} />
          )}
        </NavLink>
        <NavLink to="/upload">
          {({ isActive }) => (
            <UploadPageIcon state={isActive ? 'active' : 'default'} />
          )}
        </NavLink>
      </Stack>
    </Container>
  </Wrap>
);
export default Header;
