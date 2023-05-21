import React from 'react';
import useTitleChange from '../../TitleChange/TitleChange';

const AddToy = () => {
  useTitleChange('Legowelt || Add Toy');
  return <div className="my-6 md:my-16">Add toy</div>;
};

export default AddToy;
