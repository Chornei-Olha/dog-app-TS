import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomBox from './Box';
import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const withHoverEffect = Story => {
  return (
    <div
      onMouseEnter={() => Story({ isHovered: true })}
      onMouseLeave={() => Story({ isHovered: false })}
    >
      <Story isHovered={false} />
    </div>
  );
};

export default {
  title: 'CustomBox',
  component: CustomBox,
  decorators: [withHoverEffect]
};

export const Default = () => (
  <CustomBox
    isHovered={true}
    isHover={false}
    boxShadow="${alpha(theme.palette.common.white, 1)}"
  >
    Default Box
  </CustomBox>
);

export const HoverWithBlackShadow = () => (
  <CustomBox
    isHovered={true}
    isHover={false}
    boxShadow="${alpha(theme.palette.common.white, 1)}"
  >
    Box with BLACK shadow on hover
  </CustomBox>
);

export const HoverWithMainShadow = () => (
  <CustomBox
    isHovered={true}
    isHover={true}
    boxShadow="${alpha(theme.palette.primary.main, 1)}"
  >
    Box with MAIN shadow on hover
  </CustomBox>
);
