import { createBrowserRouter } from 'react-router-dom';
//LAYOUTS
import UserLayout from '../layout/UserLayout';
//PAGES
import HomePage from '../pages/home/HomePage';
//COMPONENTS
import Employees from '../pages/employees/employees';
import Employed from '../pages/employees/employed';

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
        path: 'employees',
        element: <Employees />,
        children: [
          {
            path: ':id',
            element: <Employed />,
          },
        ],
      },
    ],
  },
]);
