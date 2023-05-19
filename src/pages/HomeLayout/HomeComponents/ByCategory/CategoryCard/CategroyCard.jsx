import React, { useContext } from 'react';
import { FaHeart, FaMoneyBill } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../../providers/AuthProvider';

const CategroyCard = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const userNotification = () => {
    if (!user) {
      toast.warn('You have to log in first to view details', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/sign-in');
    }
  };

  return (
    <div className="p-6 mt-6 flex flex-col justify-between shadow-xl rounded-md border border-[#00b4d8] border-opacity-5">
      <div>
        <img className="max-w-full" src={product.pictureUrl} alt="" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg md:text-xl font-[archivo] text-[#0077b6]">
          {product.toyName}
        </h3>
        <div className="flex justify-between gap-20">
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl flex items-center gap-2">
            <span className="text-2xl">
              <FaMoneyBill />
            </span>{' '}
            {product.price}€
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl flex items-center gap-2">
            <span>
              <FaHeart />
            </span>{' '}
            {product.rating}
          </p>
        </div>
        <button
          onClick={userNotification}
          className="font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategroyCard;
