import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemProps, ListProps } from '@mui/material';

interface NavListProps extends ListProps {
  display?: string;
  bgcolor?: string;
}

export const NavList = styled(List)<NavListProps>(({ theme, display }) => ({
  display: display || 'flex',
  gap: '50px',
  backgroundColor: theme.palette.grey[600],
  padding: 0
}));

export const NavListItem = styled(ListItem)<ListItemProps>(() => ({
  padding: 0
}));
