import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '.';

const meta = {
  title: 'Molecules/Grid',
  component: Grid
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainGrid: Story = {
  args: {}
};
