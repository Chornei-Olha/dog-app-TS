// import type { Meta, StoryObj } from '@storybook/react';

// import CustomBox from './Box'

// const meta = {
//     title: 'CustomBox',
//     parameters: {
//         layout: 'centered'
//       }
// } satisfies Meta<typeof CustomBox>;

// export default meta;

// type Story = StoryObj<typeof meta>;

import React from 'react';
import CustomBox from './Box';

export const withBoxHoverEffect = (Story: React.ComponentType) => {
  return (
    <div
      onMouseEnter={() => <Story isHovered={true} />}
      onMouseLeave={() => <Story isHovered={false} />}
    >
      <Story />
    </div>
  );
};

export default {
  title: 'CustomBox',
  component: CustomBox,
  decorators: [withBoxHoverEffect],
};

export const Default = () => <CustomBox isHovered={false}>Обычный Box</CustomBox>;

// export const Hovered = () => <CustomBox isHovered={true}>Box с hover-эффектом</CustomBox>;



  
  


