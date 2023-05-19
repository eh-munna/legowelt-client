import ByCategory from './HomeComponents/ByCategory/ByCategory';
import Gallery from './HomeComponents/HomeBanner/Gallery/Gallery';
import HomeBanner from './HomeComponents/HomeBanner/HomeBanner';
import Testimonials from './HomeComponents/HomeBanner/Testimonials/Testimonials';

const HomeLayout = () => {
  return (
    <>
      <HomeBanner />
      <Gallery />
      <ByCategory />
      <Testimonials />
    </>
  );
};

export default HomeLayout;
