import React, { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../TitleChange/TitleChange';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow/MyToyRow';

import Swal from 'sweetalert2';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const MyToys = () => {
  useTitleChange('Legowelt || My Toys');
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    const fetchMyToys = async () => {
      const response = await fetch(
        `https://legowelt-server.vercel.app/myToy/${user?.email}`
      );
      const data = await response.json();
      setMyToys(data);
    };
    fetchMyToys();
  }, [user]);

  const sortHighPrice = () => {
    fetch(`https://legowelt-server.vercel.app/sortHighPrice/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  const sortLowPrice = () => {
    fetch(`https://legowelt-server.vercel.app/sortLowPrice/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  // delete the toy

  const deleteToy = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://legowelt-server.vercel.app/delete-toy/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyToys(myToys.filter((toy) => toy._id !== id));
            }
          });

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="my-6 md:my-16">
      <div className="flex flex-col">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 pb-3 md:pb-6">
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Name
          </div>

          <div className="flex gap-2 md:gap-8 text-[#0077b6] font-medium text-base md:text-xl items-center">
            Price
            <div className="flex gap-3 md:gap-5">
              <FaArrowUp onClick={sortHighPrice}></FaArrowUp>
              <FaArrowDown onClick={sortLowPrice}></FaArrowDown>
            </div>
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Update
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Delete
          </div>
        </div>

        {myToys.map((toy) => (
          <MyToyRow key={toy._id} toy={toy} deleteToy={deleteToy} />
        ))}
      </div>
    </div>
  );
};

export default MyToys;
