import { Box, Card, CardContent, Skeleton, Grid } from '@mui/material';

export default function MovieCardSkeleton() {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card
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
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
          <Skeleton
            variant="text"
            width="60%"
            height={20}
            animation="wave"
            sx={{ mb: 1 }}
          />
          <Skeleton variant="text" width="80%" height={32} animation="wave" />
        </CardContent>
      </Card>
    </Grid>
  );
}
