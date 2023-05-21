import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
  const updateJob = useLoaderData();
  const { _id } = updateJob;

  // update the toy

  const updateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const availableQuantity = parseFloat(form.quantity.value);
    const updateAToy = {
      price,
      description,
      availableQuantity,
    };
    form.reset();
    fetch(`https://legowelt-server.vercel.app/update-toy/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateAToy),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.info('Toy is updated', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
  };

  return (
    <div className="my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          Update Your Toy
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          make some change
        </p>
      </div>

      <div className="">
        <form
          onSubmit={updateToy}
          className="w-full md:w-2/3 mx-auto font-[roboto] space-y-4"
        >
          <div>
            <input
              required
              type="text"
              name="price"
              id=""
              placeholder="Price of The Toy"
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>

          <div>
            <input
              required
              type="text"
              name="quantity"
              id=""
              placeholder="Amount of The Toy"
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <textarea
              placeholder="Product Description"
              className="w-full bg-transparent placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
              name="description"
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full md:w-fit font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
            >
              Update Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
