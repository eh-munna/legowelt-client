import React from 'react';

const TestimonialCard = () => {
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1504349427888-431233362350?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="testimonial"
          />
        </div>
        <div className="flex flex-col justify-between font-[roboto] text-[#0077b6]">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odit ab magnam voluptatibus excepturi dolores animi sunt tenetur
              et perspiciatis, asperiores autem unde esse deserunt facere hic
              fugiat facilis quasi praesentium omnis voluptatum? Nulla quasi
              voluptas mollitia eos, odio unde labore officia adipisci amet
              reiciendis beatae dolore magnam ducimus ratione.
            </p>
          </div>
          <div className="flex flex-col items-center">
            Lorem ipsum dolor, Perferendis, beatae
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
