import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
      <div className="order-2 md:order-1 text-right md:text-left space-y-3">
        <div className="my-6 md:my-16">
          <h1 className="text-[#0077b6] font-[archivo] font-bold text-3xl md:text-7xl">
            Welcome to <br className="hidden md:inline-flex" />
            <span className="text-[#00b4d8]">Legowelt!!!</span>
          </h1>
        </div>
        <div className="text-[#0077b6] font-[roboto] space-y-3 text-base md:text-xl">
          <p>
            We believe in the power of play to create lasting memories and
            nurture young minds
          </p>
          <p>
            Our commitment to safety and quality ensures that every toy in our
            collection adheres to the highest standards, providing you with
            peace of mind as you embark on this enchanting journey of discovery
          </p>
        </div>
        <div className="pt-6 md:pt-16">
          <Link to="/">
            <button className="font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]">
              Let&apos;s explore
            </button>
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img
          className="max-w-full"
          src="https://img.freepik.com/free-photo/3d-render-contemporary-characters-team-work-puzzle_107791-17001.jpg?w=1800&t=st=1684416273~exp=1684416873~hmac=99b89eca271e0e6fd40469fa319ff27ed7792673dacd5f2b2d06b7c2d76a44d4"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
