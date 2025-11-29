import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  route('auth/login', 'auth/login/index.tsx'),
] satisfies RouteConfig;
