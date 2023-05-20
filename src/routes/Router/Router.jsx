import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ErrorPage from '../../shared/ErrorPage/ErrorPage';
import HomeLayout from '../../pages/HomeLayout/HomeLayout';
import Blog from '../../pages/Blog/Blog';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SingIn/SignIn';
import MyToys from '../../pages/MyToys/MyToys';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ToysDesc from '../../pages/ToysDesc/ToysDesc';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
      },
      {
        path: '/my-toys',
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: '/toys-desc/:id',
        element: (
          <PrivateRoute>
            <ToysDesc />
          </PrivateRoute>
        ),
      },

      { path: '/blog', element: <Blog /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-in', element: <SignIn /> },
    ],
  },
]);

export default router;
