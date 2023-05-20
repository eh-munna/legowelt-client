import React from 'react';
import { FaHeart, FaMoneyBill, FaStore } from 'react-icons/fa';
import { toast } from 'react-toastify';
const ToyDetailsCard = ({ details }) => {
  const {
    toyName,
    pictureUrl,
    description,
    price,
    availableQuantity,
    sellerName,
    sellerEmail,
    rating,
  } = details;

  const addToCart = (event) => {
    toast.success('Product added to the cart', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    event.currentTarget.disabled = true;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="">
        <img
          className="max-w-full mx-auto p-1 md:p-6"
          src={pictureUrl}
          alt=""
        />
      </div>

      <div className="flex flex-col space-y-3 py-6 px-2">
        <h2 className="text-xl md:text-2xl font-bold text-[#0077b6] font-[archivo]">
          {toyName}
        </h2>
        <div className="grid grid-cols-2 gap-y-3">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Price :
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            €{price}
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Vendor :
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {sellerName}
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Vendor Email :
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {sellerEmail}
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Rating :
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {rating}
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Availability :
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {availableQuantity}
          </p>
        </div>
        <div className="flex flex-col pt-3">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {description}
          </p>
        </div>
        <div className="pt-3">
          <button
            onClick={addToCart}
            className=" font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
          >
            Add to wishlist
          </button>
        </div>
      </div>

      {/* 
        
        
        picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
        
        */}
    </div>
  );
};

export default ToyDetailsCard;
