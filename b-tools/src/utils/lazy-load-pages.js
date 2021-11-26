import { lazy } from 'react';

const LazyPages = {
  session: [
    {
      path: '/forgot-password',
      component: lazy(() => import('components/session/ForgotPassword')),
    },
    {
      path: '/login',
      component: lazy(() => import('components/session/Login')),
    },
  ],
  admin: [
    {
      path: '/dashboard/profile',
      component: lazy(() => import('components/main/MyProfile')),
      name: 'Profile',
    },
    {
      path: '/dashboard',
      component: lazy(() => import('components/main/Dashboard')),
      name: 'Dashboard',
    },
    {
      path: '/dashboard/current-laboratories',
      component: lazy(() => import('components/main/Laboratories/Current')),
      name: 'Laboratories',
    },
    {
      path: '/dashboard/new-laboratories',
      component: lazy(() => import('components/main/Laboratories/New')),
      name: 'Laboratories',
    },
    {
      path: '/dashboard/notifications',
      component: lazy(() => import('components/main/Notification')),
      name: 'Notifications',
    },
  ],
};

export default LazyPages;
