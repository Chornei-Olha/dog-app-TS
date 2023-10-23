import type { Meta, StoryObj } from '@storybook/react';
import { AddFavoriteIcon } from '.';

const meta = {
  title: 'Atoms/AddFavoriteIcon',
  component: AddFavoriteIcon,
  argTypes: {
    state: {
      options: ['hover', 'active', 'default'],
      control: 'radio'
    },
    size: {
      options: ['small', 'middle'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof AddFavoriteIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default',
    size: 'middle'
  }
};
