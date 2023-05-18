import { Link, NavLink } from 'react-router-dom';
import logo from '/logo-no-background.png';
import { FaAlignLeft, FaAlignRight } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useContext(AuthContext);
  return (
    <nav className=" bg-[#f8f9fa] shadow-md sticky top-0 rounded-b-md pb-2 md:pb-0">
      <div className="relative container px-1 md:px-3 mx-auto flex justify-between items-center">
        <ul className="">
          <li>
            <Link to="/">
              <img className="max-w-full h-12 md:h-16" src={logo} alt="" />
            </Link>
          </li>
        </ul>
        {/* mobile menu */}
        <div className="md:hidden">
          <button className=" md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <>
              {isOpen ? (
                <FaAlignRight className="text-[#00b4d8] w-5 h-5" />
              ) : (
                <FaAlignLeft className="text-[#0077b6] w-5 h-5" />
              )}
            </>
          </button>
          <ul
            className={
              isOpen
                ? `w-fit right-0 -top-48 absolute md:relative flex flex-col md:flex-row justify-center gap-4 md:gap-3 font-medium`
                : `w-full absolute right-0 md:shadow-none shadow-lg top-12 md:top-0 text-right bg-[#f8f9fa] md:bg-transparent rounded-b-md md:relative flex flex-col md:flex-row justify-center gap-3 md:gap-3 font-medium p-3`
            }
          >
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
            <div className="md:hidden">
              <ul className="flex flex-col gap-3 md:gap-3 justify-center font-medium">
                <li>
                  <NavLink
                    to="/sign-up"
                    className={({ isActive }) =>
                      isActive
                        ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                        : `border-0 text-[#00b4d8] p-1`
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sign-in"
                    className={({ isActive }) =>
                      isActive
                        ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                        : `border-0 text-[#00b4d8] p-1`
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        {/* desktop menu */}
        <div className="hidden md:inline-flex">
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-3 font-medium">
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
            <div className="md:hidden">
              <ul className="flex flex-col gap-3 md:gap-3 justify-center font-medium">
                <li>
                  <NavLink
                    to="/sign-up"
                    className={({ isActive }) =>
                      isActive
                        ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                        : `border-0 text-[#00b4d8] p-1`
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sign-in"
                    className={({ isActive }) =>
                      isActive
                        ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                        : `border-0 text-[#00b4d8] p-1`
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <ul className="hidden md:flex md:flex-row justify-center gap-3 font-medium">
          {user ? (
            <>
              <li>
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                      : `border-0 text-[#00b4d8] p-1`
                  }
                >
                  {user.displayName}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                      : `border-0 text-[#00b4d8] p-1`
                  }
                >
                  Sign Out
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive
                    ? `border-b border-b-[#0077b6] text-[#00b4d8] p-1`
                    : `border-0 text-[#00b4d8] p-1`
                }
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
