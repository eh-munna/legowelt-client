import React from 'react';
import { FaHeart, FaMoneyBill } from 'react-icons/fa';

const CategroyCard = ({ product }) => {
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
        <button className="font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategroyCard;
