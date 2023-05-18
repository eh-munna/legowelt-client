import { Outlet } from 'react-router-dom';
import Navbar from '../shared/ErrorPage/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
