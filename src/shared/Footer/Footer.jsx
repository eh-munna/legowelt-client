import { Link, NavLink } from 'react-router-dom';
import logo from '/logo-no-background.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="font-[roboto] bg-[#f8f9fa] py-6 md:py-16 shadow-inner">
      <div className="container px-1 md:px-3 py- mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          <div className="flex flex-col items-start md:items-center  gap-2 md:gap-4">
            <Link to="/">
              <img src={logo} alt="logo" className="max-w-full h-16 md:h-20" />
            </Link>

            <p className="text-[#00b4d8] font-bold font-[archivo] text-xl md:text-2xl">
              Legowelt
            </p>
          </div>
          {/* social links */}
          <div className="pt-3 md:pt-0">
            <h3 className="text-[#00b4d8] md:text-center font-bold font-[archivo] text-xl md:text-2xl pb-2.5 md:pb-4">
              Follow us
            </h3>
            <ul className="flex items-center gap-3 md:justify-center">
              <li className="text-[#0077b6] font-bold font-[roboto] border border-[#00b4d8] rounded-full p-2 hover:bg-[#00b4d8] hover:text-[#fff]">
                <Link to="https://www.facebook.com/" className="">
                  <FaFacebookF className="md:w-5 md:h-5"></FaFacebookF>
                </Link>
              </li>
              <li className="text-[#0077b6] font-bold font-[roboto] border border-[#00b4d8] rounded-full p-2 hover:bg-[#00b4d8] hover:text-[#fff]">
                <Link to="https://www.instagram.com/" className="">
                  <FaInstagram className="md:w-5 md:h-5"></FaInstagram>
                </Link>
              </li>
              <li className="text-[#0077b6] font-bold font-[roboto] border border-[#00b4d8] rounded-full p-2 hover:bg-[#00b4d8] hover:text-[#fff]">
                <Link to="https://twitter.com/" className="">
                  <FaTwitter className="md:w-5 md:h-5"></FaTwitter>
                </Link>
              </li>
              <li className="text-[#0077b6] font-bold font-[roboto] border border-[#00b4d8] rounded-full p-2 hover:bg-[#00b4d8] hover:text-[#fff]">
                <Link to="https://www.youtube.com/" className="">
                  <FaYoutube className="md:w-5 md:h-5"></FaYoutube>
                </Link>
              </li>
            </ul>
          </div>
          {/* website realted links */}

          <div className="pt-3 md:pt-0">
            <h3 className="text-[#00b4d8] md:text-center font-bold font-[archivo] text-xl md:text-2xl pb-1 md:pb-4">
              Explore
            </h3>
            <ul className="flex flex-row md:flex-col md:items-center gap-1 md:gap-3 md:justify-center">
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b p-1 text-[#0077b6] border-b-[#00b4d8]`
                      : `border-0 p-1 text-[#00b4d8] border-b-[#0077b6]`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b p-1 text-[#0077b6] border-b-[#00b4d8]`
                      : `border-0 p-1 text-[#00b4d8] border-b-[#0077b6]`
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? `border-b p-1 text-[#0077b6] border-b-[#00b4d8]`
                      : `border-0 p-1 text-[#00b4d8] border-b-[#0077b6]`
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* store address */}
          <div className="pt-3 md:pt-0">
            <h3 className="text-[#00b4d8] md:text-center font-bold font-[archivo] text-xl md:text-2xl pb-1 md:pb-4">
              Find us
            </h3>
            <ul className="flex flex-col md:items-center gap-1 justify-center">
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                Oberfeldstraße 12345
              </li>
              <li className="text-[#0077b6] font-medium font-[roboto] p-1">
                12345 Berlin
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 text-[#00b4d8] flex md:items-center justify-center flex-col">
          <p>
            {' '}
            &copy; {new Date().getFullYear()},{' '}
            <span className="">
              <Link className="hover:text-[#0077b6] hover:underline" to="/">
                Legowelt
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
