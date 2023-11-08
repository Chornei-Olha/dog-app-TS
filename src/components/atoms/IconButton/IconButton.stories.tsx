import { IconButton } from '@mui/material';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AddFavoriteIcon } from '../AddFavoriteIcon';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {}
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleAddFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <IconButton onClick={handleAddFavorite} aria-label="add to favorites">
      <AddFavoriteIcon state={isFavorite ? 'active' : 'default'} />
    </IconButton>
  );
};
