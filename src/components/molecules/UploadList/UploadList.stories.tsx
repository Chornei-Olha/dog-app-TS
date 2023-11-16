import type { Meta, StoryObj } from '@storybook/react';

import { UploadList } from '.';

const meta = {
  title: 'Molecules/UploadList',
  component: UploadList,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof UploadList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {
    data: [
      {
        breeds: [],
        id: '-Vo1XRVJ-',
        url: 'https://cdn2.thedogapi.com/images/-Vo1XRVJ-.png',
        width: 1399,
        height: 1050,
        sub_id: '',
        created_at: '2023-11-16T16:37:02.000Z',
        original_filename: 'test app.png',
        breed_ids: ''
      },
      {
        breeds: [],
        id: 'svssmNnjz',
        url: 'https://cdn2.thedogapi.com/images/svssmNnjz.png',
        width: 1399,
        height: 1050,
        sub_id: '',
        created_at: '2023-11-16T10:54:02.000Z',
        original_filename: 'test app.png',
        breed_ids: ''
      }
    ]
  }
};
