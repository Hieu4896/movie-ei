import { createTheme } from '@mui/material/styles';

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
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Outfit', // Adding a more modern, geometric font if available, falling back to system
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      fontSize: '3.5rem',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      light: '#4FD1C5',
      main: '#38B2AC',
      dark: '#319795',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#FBD38D',
      main: '#F6AD55',
      dark: '#DD6B20',
      contrastText: '#ffffff',
    },
    ochre: {
      main: '#F6E05E',
      light: '#FAF089',
      dark: '#D69E2E',
      contrastText: '#1A202C',
    },
    vibrant: {
      main: '#FF0080', // More vibrant pink
      light: '#FF40A0',
      dark: '#D9006C',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#7928CA', // Deep vibrant purple
      light: '#9F7AEA',
      dark: '#551A8B',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F7FAFC', // Cool gray/white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A202C',
      secondary: '#4A5568',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Slightly more square for "block" feel
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          '&:active': {
            transform: 'translateY(0)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'ochre' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.ochre.main,
            color: theme.palette.ochre.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.ochre.dark,
            },
          }),
        },
        {
          props: { variant: 'contained', color: 'vibrant' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.vibrant.main,
            color: theme.palette.vibrant.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.vibrant.dark,
              boxShadow: `0 8px 20px ${theme.palette.vibrant.main}40`,
            },
          }),
        },
        {
          props: { variant: 'contained', color: 'accent' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.accent.main,
            color: theme.palette.accent.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.accent.dark,
              boxShadow: `0 8px 20px ${theme.palette.accent.main}40`,
            },
          }),
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow:
            '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)', // Subtle block shadow
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow:
              '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#fff',
            transition: 'all 0.2s ease',
            '& fieldset': {
              borderColor: '#E2E8F0',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: '#CBD5E0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7928CA', // Accent color
              borderWidth: 2,
            },
            '&.Mui-focused': {
              boxShadow: '0 0 0 4px rgba(121, 40, 202, 0.1)',
            },
          },
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
