import { IconButton } from '@mui/material';

import type { Meta, StoryObj } from '@storybook/react';
import { AddLikeIconButton } from '../../../icons/AddLikeIconButton';
import LikeIconButton from '.';

const meta = {
  title: 'Atoms/LikeIconButton',
  component: IconButton,
  argTypes: {}
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <LikeIconButton />
  }
};

export const Secondary: Story = {
  args: {
    children: <AddLikeIconButton grade="dislike" />
  }
};
