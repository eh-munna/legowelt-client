import React, { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow/ToyRow';
import useTitleChange from '../../TitleChange/TitleChange';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const AllToys = () => {
  useTitleChange('Legowelt || All Toys');
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText === '') {
      fetch(`https://legowelt-server.vercel.app/toys`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
          setIsLoading(false);
        });
    } else {
      fetch(`https://legowelt-server.vercel.app/toySearchByName/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
          setIsLoading(false);
        });
    }
  }, [searchText]);

  // searching toys by handler function

  // const searchTextHandler = () => {
  //   fetch(`https://legowelt-server.vercel.app/toySearchByName/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToys(data);
  //     });
  // };

  const userNotification = () => {
    if (!user) {
      toast.warn('You are not logged in', {
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
  };

  return (
    <div className="my-6 md:my-16">
      {isLoading ? (
        <progress className="mx-auto progress w-full bg-[#0077b6]"></progress>
      ) : (
        <h1 className="text-xl font-medium font-[archivo] text-[#0077b6] text-center">
          Here{' '}
          {toys.length <= 1
            ? `is ${toys.length} toy`
            : `are ${toys.length} toys`}
        </h1>
      )}
      <div className="py-6 flex w-full mx-auto items-center gap-3">
        <div className="w-full">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="text-[#0077b6] block w-full px-4 py-2 border border-[#0077b6] rounded-md shadow-sm focus:outline-none focus:ring-[#00b4d8] focus:border-[#00b4d8] text-base placeholder:text-[#0077b6]"
            placeholder="Search your toys"
          />
        </div>
        {/* <div className="">
          <button
            onClick={searchTextHandler}
            className=" mx-auto font-[roboto] bg-[#00b4d8] rounded-md py-2 px-3 text-base md:text-lg text-[#fff]"
          >
            Search
          </button>
        </div> */}
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-5 md:grid-cols-6 gap-4 pb-3 md:pb-6">
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Seller
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Name
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Category
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Price
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Quantity
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl"></div>
        </div>

        {toys.map((toy) => (
          <ToyRow userNotification={userNotification} key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
