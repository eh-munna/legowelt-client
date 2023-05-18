import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ErrorPage from '../../shared/ErrorPage/ErrorPage';
import HomeLayout from '../../pages/HomeLayout/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <HomeLayout /> }],
  },
]);

export default router;
