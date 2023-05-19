import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategroyCard from './CategoryCard/CategroyCard';

const ByCategory = () => {
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [toggleTab, setToggleTab] = useState('LEGO City');
  useEffect(() => {
    fetch('/toys.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const cityToys = products.filter(
      (product) => product.subCategory === 'LEGO City'
    );
    setCities(cityToys);
  }, [products]);

  const handleTabChange = (categoryName) => {
    setToggleTab(categoryName);
  };

  // const getCities = () => {
  //   setProducts(cities);
  // };
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
            onClick={() => handleTabChange('LEGO City')}
            className={`w-1/3 font-[roboto]  p-2 text-base md:text-lg text-[#fff] ${
              toggleTab === 'LEGO City' ? `bg-[#0077b6]` : `bg-[#00b4d8]`
            }`}
          >
            Cars
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cities.map((product) => (
            <CategroyCard product={product}></CategroyCard>
          ))}
        </div>
        {/* <Tabs>
          <TabList className="bg-rose-500">
            <Tab onClick={getCities}>Lego City</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs> */}
      </div>
    </div>
  );
};

export default ByCategory;
