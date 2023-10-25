import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomBox from './СustomBox';

import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const withHoverEffect = Story => {
  return (
    <div
      onMouseEnter={() => Story({ showHovered: true })}
      onMouseLeave={() => Story({ showHovered: false })}
    >
      <Story showHovered={false} />
    </div>
  );
};

export default {
  title: 'CustomBox',
  component: CustomBox,
  decorators: [withHoverEffect]
};

export const HoverWithBlackShadow = () => (
  <CustomBox
    showHovered={false}
    boxShadow={alpha(theme.palette.common.white, 1)}
  >
    Box with BLACK shadow on hover
  </CustomBox>
);

export const HoverWithMainShadow = () => (
  <CustomBox
    showHovered={true}
    boxShadow={alpha(theme.palette.primary.main, 1)}
  >
    Box with MAIN shadow on hover
  </CustomBox>
);
