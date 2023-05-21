import React from 'react';

import HomeBanner from './HomeComponents/HomeBanner/HomeBanner';
import Gallery from './HomeComponents/Gallery/Gallery';
import ByCategory from './HomeComponents/ByCategory/ByCategory';
import Testimonials from './HomeComponents/Testimonials/Testimonials';
import NewsConnect from './HomeComponents/NewsConnect/NewsConnect';
import useTitleChange from '../../TitleChange/TitleChange';

const HomeLayout = () => {
  useTitleChange('Legowelt || Home');
  return (
    <>
      <HomeBanner />
      <Gallery />
      <ByCategory />
      <Testimonials />
      <NewsConnect />
    </>
  );
};

export default HomeLayout;
