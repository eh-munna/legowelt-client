import React from 'react';

const News = () => {
  return (
    <div className="flex flex-col justify-between gap-4 md:gap-6">
      <h3 className="text-[#0077b6] font-[achivo] text-xl md:text-2xl my-2">
        Unicorn Spotted Soaring Above Sunnydale Park Playground!
      </h3>
      <p className="normal-case text-[#0077b6] text-base md:text-lg font-[roboto]">
        In a truly enchanting incident, a group of children at the Sunnydale
        Park Playground reported an extraordinary sighting yesterday. They
        claimed to have witnessed a majestic unicorn gracefully soaring through
        the sky above the playground, leaving a trail of sparkling rainbow dust
        in its wake
      </p>
    </div>
  );
};

export default News;
