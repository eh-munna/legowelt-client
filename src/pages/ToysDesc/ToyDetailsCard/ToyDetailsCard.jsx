import React from 'react';
import { FaHeart, FaMoneyBill, FaStore } from 'react-icons/fa';
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

        <div className="flex gap-2 md:gap-7">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Price:
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            €{price}
          </p>
        </div>
        <div className="flex gap-2 md:gap-7">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Vendor:
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {sellerName}
          </p>
        </div>
        <div className="flex gap-2 md:gap-7">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Vendor Email:
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {sellerEmail}
          </p>
        </div>
        <div className="flex gap-2 md:gap-7">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Rating:
          </p>
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            {rating}
          </p>
        </div>
        <div className="flex gap-2 md:gap-7">
          <p className="text-[#00b4d8] font-[roboto] text-sm md:text-lg">
            Availability:
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
          <button className=" font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]">
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
