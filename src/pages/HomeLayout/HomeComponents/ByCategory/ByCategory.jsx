import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ByCategory = () => {
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch('/public/toys.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const cityToys = products.filter(
      (product) => product.subCategory === 'LEGO City'
    );
    setCities(cityToys);
  }, [products]);

  const getCities = () => {
    setProducts(cities);
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
        <div>
          <Tabs>
            <TabList className="bg-rose-500">
              <Tab onClick={getCities}>Lego City</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              {cities.map((product) => (
                <img src={product.pictureUrl} alt="" />
              ))}
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
