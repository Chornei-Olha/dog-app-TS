import { Components, Theme, alpha } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),

    containedPrimary: ({ theme: { palette } }) => ({
      color: palette.primary.contrastText,
      backgroundColor: palette.primary.main,
      boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        boxShadow: `0px 0px 0px 0px ${alpha(palette.common.black, 1)}`
      }
    }),

    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: palette.grey[100],
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      },
      '&:active': {
        backgroundColor: palette.grey[300],
        boxShadow: `0px 0px 0px 0px ${alpha(palette.common.black, 1)}`
      }
    }),

    outlinedPrimary: ({ theme: { palette } }) => ({
      color: palette.secondary.contrastText,
      backgroundColor: 'transparent',
      border: `1px solid ${palette.secondary.contrastText}`,
      position: 'relative',
      transition: 'all 0.2s ease-in-out',

      '&:after': {
        content: "''",
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        borderRight: `1px solid ${palette.common.black}`,
        borderBottom: `1px solid ${palette.common.black}`,
        borderRadius: 6,
        bottom: '-5px',
        right: '-5px',
        zIndex: -1
      },
      '&:hover': {
        color: palette.action.hover,
        border: `1px solid ${palette.action.hover}`
      },
      '&:active': {
        color: palette.action.selected,
        border: `1px solid ${palette.action.selected}`,

        '&:after': {
          bottom: '0',
          right: '0',
          borderRight: `none`,
          borderBottom: `none`
        }
      }
    }),

    outlinedSecondary: ({ theme: { palette } }) => ({
      color: palette.primary.contrastText,
      backgroundColor: 'transparent',
      border: `1px solid ${palette.primary.contrastText}`,
      '&:hover': {
        border: `1px solid ${palette.grey[100]}`
      },
      '&:active': {
        border: `1px solid ${palette.grey[300]}`
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
