import React, { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../TitleChange/TitleChange';
import { AuthContext } from '../../providers/AuthProvider';
import ToyRow from '../AllToys/ToyRow/ToyRow';
import MyToyRow from './MyToyRow/MyToyRow';

const MyToys = () => {
  useTitleChange('Legowelt || My Toys');
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    const fetchMyToys = async () => {
      const response = await fetch(`http://localhost:5000/myToy/${user.email}`);
      const data = await response.json();
      setMyToys(data);
    };
    fetchMyToys();
  }, []);

  console.log(myToys);

  return (
    <div className="my-6 md:my-16">
      <div className="flex flex-col">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 pb-3 md:pb-6">
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Name
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Category
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Update
          </div>
          <div className="flex flex-col text-[#0077b6] font-medium text-base md:text-xl">
            Delete
          </div>
        </div>

        {myToys.map((toy) => (
          <MyToyRow key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default MyToys;
