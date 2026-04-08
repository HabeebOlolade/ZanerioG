// src/constants/routes.ts
export const ROUTES = {
  HOME: '/',
  ABOUT: '/AboutUs',
  CONTACT: '/Contact'
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = typeof ROUTES[RouteKeys];