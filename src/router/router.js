import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import UserLayout from '../layouts/user-layout';
import ErrorPage from '../pages/error/ErrorPage';
import SelfFormikYup from '../components/self-formik-yup';
import FormikDel from '../components/formikDelete';

const router = createBrowserRouter([
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
        element: <SelfFormikYup />,
      },
      {
        path: 'deleteAccount',
        element: <FormikDel />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
