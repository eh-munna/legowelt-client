import React from 'react';

import { useLoaderData } from 'react-router-dom';
import ToyDetailsCard from './ToyDetailsCard/ToyDetailsCard';

const ToysDesc = () => {
  const details = useLoaderData();
  return (
    <div className="grid grid-cols-1 my-6 md:my-16 rounded-lg shadow-xl border border-[#00b4d8] border-opacity-5">
      <ToyDetailsCard details={details} />
    </div>
  );
};

export default ToysDesc;
