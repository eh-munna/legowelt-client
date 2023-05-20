import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard/GalleryCard';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    fetch('/productGallery.json')
      .then((res) => res.json())
      .then((data) => setGalleryImages(data));
  }, []);
  return (
    <div className="my-6 md:my-16">
      <div className="capitalize text-center space-y-3 py-4 md:py-12">
        <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6]">
          Featured Products
        </h2>
        <p className="text-[#00b4d8] font-[roboto] text-base md:text-xl">
          What We Sell
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3">
        {galleryImages.map((image) => (
          <GalleryCard key={image.id} image={image}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
