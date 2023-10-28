import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';
import { navMenuItems } from './config';

const meta = {
  title: 'Atom/Menu',
  component: Menu,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  args: {
    menuList: navMenuItems
  }
};
