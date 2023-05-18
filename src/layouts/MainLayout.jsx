import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold">
        Welcome to the React App
      </h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
