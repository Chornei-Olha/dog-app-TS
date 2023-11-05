import { Pagination } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta = {
  title: 'Atoms/Pagination',
  component: Pagination,
  argTypes: {}
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = () => {
  const [page, setPage] = useState<number>(1);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Pagination
      count={3}
      showFirstButton
      showLastButton
      page={page}
      onChange={handleChangePage}
    />
  );
};
