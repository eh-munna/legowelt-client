import { Link, NavLink } from 'react-router-dom';
import logo from '/logo-no-background.png';

const Navbar = () => {
  return (
    <nav className=" bg-[#f8f9fa] shadow-md sticky rounded-b-md">
      <div className="container px-1 md:px-3 mx-auto flex justify-between items-center">
        <ul className="">
          <li>
            <Link to="/">
              <img className="max-w-full h-12 md:h-16" src={logo} alt="" />
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col md:flex-row justify-center gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                  : `border-0 text-[#00b4d8] p-1`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                  : `border-0 text-[#00b4d8] p-1`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <ul className="hidden md:flex gap-2">
          <li>sign-in</li>
          <li>sign-in</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
