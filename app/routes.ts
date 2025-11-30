import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.ts'),
  route('auth/login', 'routes/auth/login.ts'),
  route('api/movies', 'routes/api/movies.ts'),
] satisfies RouteConfig;
