import type { Meta, StoryObj } from '@storybook/react';

import { FavoriteList } from '.';

const meta = {
  title: 'Organisms/FavoriteList',
  component: FavoriteList,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FavoriteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {
    favoritesData: [
      {
        id: '1',
        name: 'Golden Retriever',
        image: 'https://example.com/golden.jpg',
        temperament: 'Intelligent, Friendly, Devoted',
        moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
      },
      {
        id: '2',
        name: 'Golden Retriever',
        image: 'https://example.com/golden.jpg',
        temperament: 'Intelligent, Friendly, Devoted',
        moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
      },
      {
        id: '3',
        name: 'Golden Retriever',
        image: 'https://example.com/golden.jpg',
        temperament: 'Intelligent, Friendly, Devoted',
        moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
      }
    ]
  }
};
