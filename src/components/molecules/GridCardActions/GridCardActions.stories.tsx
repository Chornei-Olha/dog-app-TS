import type { Meta } from '@storybook/react';
import { Box } from '@mui/material';

import { GridCardActions, GridCardActionsProps } from '.';

const meta: Meta<GridCardActionsProps> = {
  title: 'Molecules/GridCardActions',
  component: GridCardActions
};
export default meta;

export const Main = () => (
  <Box
    sx={{
      width: '250px',
      height: '200px',
      position: 'relative',
      backgroundColor: 'gray'
    }}
  >
    <GridCardActions
      id="1"
      isFavorite={false}
      breed="Learn more"
      cardType="main"
    />
  </Box>
);

export const Upload = () => (
  <Box
    sx={{
      width: '250px',
      height: '200px',
      position: 'relative',
      backgroundColor: 'gray'
    }}
  >
    <GridCardActions id="1" isFavorite={false} cardType="upload" />
  </Box>
);
