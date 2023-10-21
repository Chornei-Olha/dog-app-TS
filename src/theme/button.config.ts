import { Components, Theme, alpha } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 1.6,
      padding: theme.spacing(1, 5),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      boxShadow: `3px 3px 0 0 ${alpha(palette.common.black, 1)}`,
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: `3px 3px 0 0 ${alpha(palette.common.black, 1)}`,
      },
      '&:active': {
        backgroundColor: palette.action.selected,
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      boxShadow: `3px 3px 0 0 ${alpha(palette.common.black, 1)}`,
      color: palette.primary.main,
      '&:hover': {
        boxShadow: `3px 3px 0 0 ${alpha(palette.common.black, 1)}`,
      },
    }),

  },
  defaultProps: {
    disableRipple: true
  }
};
