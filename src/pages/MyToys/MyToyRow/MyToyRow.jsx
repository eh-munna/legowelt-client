import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy }) => {
  const { _id, toyName, price } = toy;
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-4 border-b border-b-[#0077b6] border-opacity-10 items-center">
      <div className="text-[#0077b6] text-base md:text-lg py-2">{toyName}</div>
      <div className="text-[#0077b6] text-base md:text-lg py-2">€{price}</div>

      <div className="text-[#0077b6] text-base md:text-lg py-2">
        <Link to={`/update-toy/${_id}`}>
          <button className="font-[roboto] bg-[#00b4d8] rounded-md py-1 px-2 text-base md:text-lg text-[#fff]">
            Update
          </button>
        </Link>
      </div>
      <div className="text-[#0077b6] text-base md:text-lg py-2">
        <Link to={`/update-toy/${_id}`}>
          <button className="font-[roboto] bg-[#00b4d8] rounded-md py-1 px-2 text-base md:text-lg text-[#fff]">
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyToyRow;
