import { createBrowserRouter } from 'react-router-dom';
//LAYOUTS
import UserLayout from '../layouts/user-layout';
//PAGES
import HomePage from '../pages/home/HomePage';
import FormItems from '../components/self-formik-yup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <FormItems />,
      },
    ],
  },
]);
