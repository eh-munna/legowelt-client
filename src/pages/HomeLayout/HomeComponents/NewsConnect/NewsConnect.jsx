import React from 'react';
import Connect from './Connect/Connect';
import News from './News/News';

const NewsConnect = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          Latest News
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          from the world of kids
        </p>
        <div>
          <News />
        </div>
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
};

export default NewsConnect;
