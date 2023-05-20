import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
  const { _id, toyName, sellerName, subCategory, price, availableQuantity } =
    toy;
  return (
    // <div className="">
    <div className="grid grid-cols-5 md:grid-cols-6 gap-4 border-b border-b-[#0077b6] border-opacity-10 items-center">
      <div className="text-[#0077b6] text-base md:text-lg py-2">
        {sellerName}
      </div>
      <div className="text-[#0077b6] text-base md:text-lg py-2">{toyName}</div>
      <div className="text-[#0077b6] text-base md:text-lg py-2">
        {subCategory}
      </div>
      <div className="text-[#0077b6] text-base md:text-lg py-2">€{price}</div>
      <div className="text-[#0077b6] text-base md:text-lg py-2">
        {availableQuantity}
      </div>
      <div className="text-[#00b4d8] col-span-5 md:col-span-1 mx-auto md:mx-0 py-2">
        <Link to={`/toy/${_id}`}>
          <button className=" w-full mx-auto font-[roboto] bg-[#00b4d8] rounded-md py-1 px-3 text-base md:text-lg text-[#fff]">
            View Details
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default ToyRow;
