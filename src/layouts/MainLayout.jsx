import { Outlet } from 'react-router-dom';
import Navbar from '../shared/ErrorPage/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 pb-2 md:pb-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
