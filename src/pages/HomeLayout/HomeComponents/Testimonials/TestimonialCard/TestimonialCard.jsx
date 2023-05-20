import React, { useEffect, useState } from 'react';

const TestimonialCard = ({ review }) => {
  const { customerName, customerProfession, customerReview } = review;
  return (
    <>
      <div className="flex flex-col justify-between gap-6 shadow-lg p-6 md:p-9 rounded-md border border-[#0077b6] border-opacity-5 bg-[#0077b6] bg-opacity-5">
        <div className="flex flex-col justify-between font-[roboto] text-[#0077b6]">
          <p>{customerReview}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-[roboto] text-[#00b4d8] font-medium">
            {customerName}
          </p>
          <p className="font-[roboto] text-[#00b4d8]">{customerProfession}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
