import React, { useEffect, useState } from 'react';
import ToyRow from './ToyRow/ToyRow';
import useTitleChange from '../../TitleChange/TitleChange';

const AllToys = () => {
  useTitleChange('Legowelt || All Toys');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://legowelt-server.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  console.log(toys);

  return (
    <div className="my-6 md:my-16">
      <div className="flex flex-col">
        <div className="grid grid-cols-5 md:grid-cols-6 gap-4 pb-3 md:pb-6">
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Seller
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Name
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Category
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Price
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Quantity
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl"></div>
        </div>

        {toys.map((toy) => (
          <ToyRow key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
