import { Link } from '@mui/material';

import { NavList, NavListItem } from './styled';

type MenuItemProps = {
  text: string;
  path: string;
};

export type MenuProps = {
  menuList: MenuItemProps[];
};

export const Menu = ({ menuList }: MenuProps) => (
  <NavList component="nav">
    {menuList.map(item => (
      // react-router <Link/> add
      <NavListItem key={item.text}>
        <Link href={item.path} variant="h2" underline="none">
          {item.text}
        </Link>
      </NavListItem>
    ))}
  </NavList>
);
