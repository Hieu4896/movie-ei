import { createTheme } from '@mui/material/styles';
import { teal, orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
    vibrant: Palette['primary'];
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    ochre?: PaletteOptions['primary'];
    vibrant?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true;
    vibrant: true;
    accent: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      borderRadius: 12,
    },
  },
  palette: {
    primary: {
      light: teal[300],
      main: teal[600],
      dark: teal[800],
      contrastText: '#ffffff',
    },
    secondary: {
      light: orange[300],
      main: orange[600],
      dark: orange[800],
      contrastText: '#ffffff',
    },
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
    vibrant: {
      main: '#FF006E', // Hot pink
      light: '#FF4081',
      dark: '#C51162',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#8338EC', // Purple
      light: '#A855F7',
      dark: '#6B21A8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'ochre' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.ochre.main,
            color: theme.palette.ochre.contrastText,
            fontWeight: 700,
            padding: '12px 24px',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: theme.palette.ochre.dark,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 16px rgba(227, 208, 38, 0.3)',
            },
            transition: 'all 0.2s ease-in-out',
          }),
        },
        {
          props: { variant: 'contained', color: 'vibrant' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.vibrant.main,
            color: theme.palette.vibrant.contrastText,
            fontWeight: 700,
            padding: '12px 24px',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: theme.palette.vibrant.dark,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 16px rgba(255, 0, 110, 0.3)',
            },
            transition: 'all 0.2s ease-in-out',
          }),
        },
        {
          props: { variant: 'contained', color: 'accent' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.accent.main,
            color: theme.palette.accent.contrastText,
            fontWeight: 700,
            padding: '12px 24px',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: theme.palette.accent.dark,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 16px rgba(131, 56, 236, 0.3)',
            },
            transition: 'all 0.2s ease-in-out',
          }),
        },
        {
          props: { variant: 'outlined' },
          style: () => ({
            borderWidth: 2,
            fontWeight: 600,
            '&:hover': {
              borderWidth: 2,
              transform: 'translateY(-1px)',
            },
            transition: 'all 0.2s ease-in-out',
          }),
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
