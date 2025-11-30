import type React from 'react';
import { useRef, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  useTheme,
  alpha,
  Stack,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import StarIcon from '@mui/icons-material/Star';
import type { Movie } from '@/types/movie';
import { useMovie } from '@/hooks/useMovie';
import MovieCardSkeleton from '@/components/MovieCardSkeleton';
import { motion } from 'motion/react';

const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    hasMore,
    loadMore,
  } = useMovie({ initialSearchTerm: 'Marvel' }); // Default search to show something

  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#0f172a', // Dark blue-gray
          color: 'white',
          pt: 4,
          pb: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cinematic Animated Background */}
        {/* Animated Gradient Overlay */}
        <MotionBox
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.vibrant.main, 0.15)} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${alpha(theme.palette.accent.main, 0.15)} 0%, transparent 50%)`,
              `radial-gradient(circle at 50% 80%, ${alpha(theme.palette.vibrant.main, 0.15)} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.vibrant.main, 0.15)} 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        />

        {/* Moving Light Beams */}
        <MotionBox
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(90deg, transparent 0%, ${alpha(theme.palette.vibrant.main, 0.1)} 50%, transparent 100%)`,
            transform: 'skewX(-20deg)',
            zIndex: 0,
          }}
        />

        {/* Film Strip Border Effect - Top */}
        <MotionBox
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: 8,
            background: `repeating-linear-gradient(
              90deg,
              ${alpha(theme.palette.vibrant.main, 0.3)} 0px,
              ${alpha(theme.palette.vibrant.main, 0.3)} 20px,
              transparent 20px,
              transparent 40px
            )`,
            zIndex: 1,
          }}
        />

        {/* Film Strip Border Effect - Bottom */}
        <MotionBox
          animate={{
            x: ['0%', '50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '200%',
            height: 8,
            background: `repeating-linear-gradient(
              90deg,
              ${alpha(theme.palette.accent.main, 0.3)} 0px,
              ${alpha(theme.palette.accent.main, 0.3)} 20px,
              transparent 20px,
              transparent 40px
            )`,
            zIndex: 1,
          }}
        />

        {/* Scanline Effect */}
        <MotionBox
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              180deg,
              transparent 0%,
              ${alpha('#fff', 0.02)} 50%,
              transparent 100%
            )`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Vignette Effect */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.8) 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Nav */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={8}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <MovieIcon sx={{ color: 'vibrant.main', fontSize: 32 }} />
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{ letterSpacing: '-0.02em' }}
              >
                MovieEI
              </Typography>
            </Stack>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate('/auth/login')}
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              Sign In
            </Button>
          </Stack>

          {/* Hero Content */}
          <Box textAlign="center" maxWidth="md" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="Discover Amazing Movies"
                sx={{
                  bgcolor: alpha(theme.palette.vibrant.main, 0.1),
                  color: 'vibrant.light',
                  fontWeight: 700,
                  mb: 3,
                  border: `1px solid ${alpha(theme.palette.vibrant.main, 0.2)}`,
                }}
              />
            </MotionBox>
            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}
            >
              Find your next <br />
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.vibrant.main}, ${theme.palette.accent.main})`,
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                favorite story
              </Box>
            </MotionTypography>
            <MotionTypography
              variant="h5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{
                mb: 6,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Search through millions of movies and TV shows. Track what
              you&apos;ve watched and discover new favorites.
            </MotionTypography>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TextField
                fullWidth
                placeholder="Search for movies, TV shows..."
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'white',
                    height: 72,
                    fontSize: '1.2rem',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    color: 'text.primary',
                    '& fieldset': { border: 'none' },
                    pl: 2,
                  },
                }}
              />
            </MotionBox>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mt: 8, pb: 8 }}>
        <Stack direction="row" alignItems="center" spacing={2} mb={4}>
          <Box
            sx={{
              width: 6,
              height: 32,
              bgcolor: 'vibrant.main',
              borderRadius: 1,
            }}
          />
          <Typography variant="h3" color="text.primary">
            {searchTerm ? `Results for "${searchTerm}"` : 'Featured Movies'}
          </Typography>
        </Stack>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}
        {/* Render list movies  */}
        <Grid container spacing={3}>
          {movies.map((movie: Movie, index: number) => {
            const isLastElement = movies.length === index + 1;
            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={`${movie.imdbID}-${index}`}
                ref={isLastElement ? lastMovieElementRef : null}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                    transition: { duration: 0.2 },
                  }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    bgcolor: 'white',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '2/3',
                      overflow: 'hidden',
                    }}
                  >
                    {movie.Poster === 'N/A' || !movie.Poster ? (
                      // Placeholder for missing posters
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${alpha(theme.palette.vibrant.main, 0.1)} 0%, ${alpha(theme.palette.accent.main, 0.1)} 100%)`,
                          bgcolor: 'grey.100',
                          gap: 2,
                        }}
                      >
                        <MovieIcon
                          sx={{
                            fontSize: 80,
                            color: 'grey.400',
                            opacity: 0.5,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'grey.500',
                            textAlign: 'center',
                            px: 2,
                            fontWeight: 600,
                          }}
                        >
                          No Poster Available
                        </Typography>
                      </Box>
                    ) : (
                      <CardMedia
                        component="img"
                        loading="lazy"
                        image={movie.Poster}
                        alt={movie.Title}
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement>
                        ) => {
                          // Replace with placeholder on error
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (
                            parent &&
                            !parent.querySelector('.placeholder-box')
                          ) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'placeholder-box';
                            placeholder.style.cssText = `
                              width: 100%;
                              height: 100%;
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              justify-content: center;
                              background: linear-gradient(135deg, ${alpha(theme.palette.vibrant.main, 0.1)} 0%, ${alpha(theme.palette.accent.main, 0.1)} 100%);
                              background-color: #f5f5f5;
                            `;
                            placeholder.innerHTML = `
                              <svg width="80" height="80" viewBox="0 0 24 24" fill="#bdbdbd" opacity="0.5">
                                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                              </svg>
                              <p style="color: #9e9e9e; font-size: 12px; margin-top: 8px; font-weight: 600;">Image Not Available</p>
                            `;
                            parent.appendChild(placeholder);
                          }
                        }}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'rgba(0,0,0,0.75)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: 1.5,
                        px: 1,
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <StarIcon sx={{ color: 'ochre.main', fontSize: 14 }} />
                      <Typography
                        variant="caption"
                        sx={{ color: 'white', fontWeight: 700 }}
                      >
                        N/A
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'vibrant.main',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        fontSize: '0.7rem',
                      }}
                    >
                      {movie.Type} • {movie.Year}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ mt: 1, fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {movie.Title}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            );
          })}
          {loading &&
            Array.from(new Array(4)).map((_, index) => (
              <MovieCardSkeleton key={`skeleton-${index}`} />
            ))}
        </Grid>

        {!loading && !hasMore && movies.length > 0 && (
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 4 }}
          >
            You have reached the end of the list.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
