import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import MainLayout from '../../layouts/MainLayout';
import ErrorPage from '../../shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export default router;
