import React, { useContext, useState } from 'react';
import useTitleChange from '../../TitleChange/TitleChange';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
  useTitleChange('Legowelt || Add Toy');
  const { user } = useContext(AuthContext);
  const subCategory = [
    'lego-cars',
    'lego-architecture',
    'lego-city',
    'lego-creative-building',
    'lego-star-wars',
  ];
  const [selectSubCategory, setSelectedSubCategory] = useState(subCategory[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const addAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const sellerEmail = user.email;
    const sellerName = user.displayName;
    const pictureUrl = form.pictureUrl.value;
    const subCategory = form.subCategory.value;
    const rating = parseFloat(form.rating.value);
    const availableQuantity = parseFloat(form.quatity.value);
    const newToy = {
      toyName,
      price,
      description,
      sellerEmail,
      sellerName,
      pictureUrl,
      subCategory,
      rating,
      availableQuantity,
    };

    fetch('http://localhost:5000/add-toy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Added');
        }
        console.log(data);
      });

    console.log(newToy);
  };

  return (
    <div className="my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          Add Your toy
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          Show your product
        </p>
      </div>

      <div className="">
        <form
          onSubmit={addAToy}
          className="w-full md:w-2/3 mx-auto font-[roboto] space-y-4"
        >
          <div className="">
            <input
              required
              type="text"
              name="toyName"
              id=""
              placeholder="Your Toy Name"
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <input
              readOnly
              defaultValue={user.email}
              required
              type="email"
              name="sellerEmail"
              id=""
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <input
              defaultValue={user.displayName}
              readOnly
              required
              type="text"
              name="sellerName"
              id=""
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
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
              name="rating"
              id=""
              placeholder="Rating of The Toy"
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="quatity"
              id=""
              placeholder="Amount of The Toy"
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <input
              required
              type="url"
              name="pictureUrl"
              id=""
              placeholder="Please enter a valid URL"
              className="w-full placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div className="placeholder:text-[#0077b6] text-[#00b4d8] p-2 flex items-center gap-4">
            <label htmlFor="">Select the Toy Category</label>
            <select
              id="inputState"
              name="subCategory"
              className="form-select"
              value={selectSubCategory}
              onChange={handleChangeSelectedValue}
            >
              {subCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              placeholder="Prduct Description"
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
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
