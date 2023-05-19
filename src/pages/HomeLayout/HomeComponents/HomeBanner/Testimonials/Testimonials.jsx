import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div className="my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          What People Say
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          They Speak their heart out
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
        <TestimonialCard></TestimonialCard>
      </div>
    </div>
  );
};

export default Testimonials;
