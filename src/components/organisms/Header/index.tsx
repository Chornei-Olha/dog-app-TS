import { IconButton, Stack, SvgIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import LogoIcon from '../../../assets/icons/Logo.svg?react';
import { Menu } from '../../atoms/Menu';
import { UploadPageIcon } from '../../atoms/UploadPageIcon';
import { FavoritePageIcon } from '../../atoms/FavoritePageIcon';
import { menuHeader } from '../../../utils/const';
import { Wrap, Logo, LogoDog, LogoStarGallery, Container } from './styled';
import { ModalUpload } from '../UploadPageContent';

const Header = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  return (
    <>
      <ModalUpload isOpen={isOpenDeleteModal} />;
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
            <IconButton onClick={() => setIsOpenDeleteModal(true)}>
              <UploadPageIcon
                state={isOpenDeleteModal ? 'active' : 'default'}
              />
            </IconButton>
          </Stack>
        </Container>
      </Wrap>
    </>
  );
};
export default Header;
