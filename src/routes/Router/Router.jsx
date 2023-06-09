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
import AllToys from '../../pages/AllToys/AllToys';
import AddToy from '../../pages/AddToy/AddToy';
import Update from '../../pages/Update/Update';

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
        path: '/all-toys',
        element: <AllToys />,
      },
      {
        path: '/add-toy',
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
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
        path: '/update-toy/:id',
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://legowelt-server.vercel.app/toy/${params.id}`),
      },
      {
        path: '/toy/:id',
        element: (
          <PrivateRoute>
            <ToysDesc />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://legowelt-server.vercel.app/toy/${params.id}`),
      },

      { path: '/blog', element: <Blog /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-in', element: <SignIn /> },
    ],
  },
]);

export default router;
