import React, { useEffect, useState } from 'react';

import CategoryCard from './CategoryCard/CategoryCard';

const ByCategory = () => {
  const [products, setProducts] = useState([]);
  const [toggleTab, setToggleTab] = useState('lego-cars');
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${toggleTab}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [toggleTab]);

  const handleTabChange = (categoryName) => {
    setToggleTab(categoryName);
  };
  return (
    <div className="my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          Shop By Category
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          Chose your own
        </p>
      </div>
      <div>
        <div className="bg-[#f8f9fa] flex justify-between w-4/5 mx-auto gap-2">
          <button
            onClick={() => handleTabChange('lego-cars')}
            className={`w-1/3 font-[roboto]  p-2 text-base md:text-lg text-[#fff] ${
              toggleTab === 'lego-cars' ? `bg-[#00b4d8]` : `bg-[#0077b6]`
            }`}
          >
            Cars
          </button>
          <button
            onClick={() => handleTabChange('lego-city')}
            className={`w-1/3 font-[roboto]  p-2 text-base md:text-lg text-[#fff] ${
              toggleTab === 'lego-city' ? `bg-[#00b4d8]` : `bg-[#0077b6]`
            }`}
          >
            City
          </button>
          <button
            onClick={() => handleTabChange('lego-architecture')}
            className={`w-1/3 font-[roboto]  p-2 text-base md:text-lg text-[#fff] ${
              toggleTab === 'lego-architecture'
                ? `bg-[#00b4d8]`
                : `bg-[#0077b6]`
            }`}
          >
            Architecture
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {products.map((product) => (
            <CategoryCard key={product._id} product={product}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
