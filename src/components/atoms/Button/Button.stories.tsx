import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'outlinedSecondary','containedIcon',],
      control: 'radio'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Button'
  }
};


export const OutlinedSecondary: Story = {
  args: {
    variant: 'outlinedSecondary',
    children: 'Button'
  }
};

export const ContainedIcon: Story = {
  args: {
    variant: 'containedIcon',
    children: 'Button'
  }
};
