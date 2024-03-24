// router
import { createBrowserRouter } from 'react-router-dom';
//layouts
import AppLayout from '../layouts/App.layout'
//components
import Home from '../pages/home/home'
import Blog from '../pages/blog/blog';

export const routes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
      ],
    },
  ]);