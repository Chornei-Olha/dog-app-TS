import React from 'react';
import { Meta, Story } from '@storybook/react';
import BreedList from '.';
// import BreedCard from '../../molecules/BreedCard';

export default {
  title: 'Components/BreedList',
  component: BreedList
} as Meta;

const Template: Story<BreedListProps> = args => <BreedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  breedsData: [
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden.jpg',
      temperament: 'Intelligent, Friendly, Devoted',
      moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
    },
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden.jpg',
      temperament: 'Intelligent, Friendly, Devoted',
      moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
    },
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden.jpg',
      temperament: 'Intelligent, Friendly, Devoted',
      moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
    },
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden.jpg',
      temperament: 'Intelligent, Friendly, Devoted',
      moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
    },
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden.jpg',
      temperament: 'Intelligent, Friendly, Devoted',
      moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
    },
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden.jpg',
      temperament: 'Intelligent, Friendly, Devoted',
      moreInfo: 'The Golden Retriever is one of the most popular dog breeds.'
    }
  ]
};
