import { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';

import { useNavigate } from 'react-router';
import type React from 'react';

interface MetaArgs {
  params: Record<string, never>;
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: unknown;
    key: string;
  };
}

export type { MetaArgs };

export function meta(_args: MetaArgs) {
  return [
    { title: 'Login - Movie EI' },
    { name: 'description', content: 'Sign in to your account' },
  ];
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock login
    navigate('/');
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 2,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(45deg, #00897B, #FF006E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to continue to Movie EI
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {error && (
              <Alert
                severity="error"
                sx={{
                  borderRadius: 2,
                  '& .MuiAlert-message': {
                    fontWeight: 500,
                  },
                }}
              >
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: '#f8fafc',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00897B',
                    },
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00897B',
                      borderWidth: 2,
                    },
                  },
                },
                '& .MuiInputLabel-root': {
                  '&.Mui-focused': {
                    color: '#00897B',
                  },
                },
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 1000px #fff inset',
                  WebkitTextFillColor: '#000',
                  caretColor: '#000',
                  borderRadius: 'inherit',
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: '#f8fafc',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00897B',
                    },
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00897B',
                      borderWidth: 2,
                    },
                  },
                },
                '& .MuiInputLabel-root': {
                  '&.Mui-focused': {
                    color: '#00897B',
                  },
                },
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 1000px #fff inset',
                  WebkitTextFillColor: '#000',
                  caretColor: '#000',
                  borderRadius: 'inherit',
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="vibrant"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign In'
              )}
            </Button>
          </Box>
        </form>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Demo credentials: admin / 123
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
