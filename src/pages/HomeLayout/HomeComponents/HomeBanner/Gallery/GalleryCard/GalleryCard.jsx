import React from 'react';

const GalleryCard = ({ product }) => {
  const { pictureUrl } = product;
  return (
    <div className="shadow-lg p-2 rounded-md border border-[#0077b6] border-opacity-5">
      <img className="rounded-md mx-auto max-w-full" src={pictureUrl} />
    </div>
  );
};

export default GalleryCard;
