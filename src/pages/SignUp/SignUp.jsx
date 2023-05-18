import { Link } from 'react-router-dom';

const SignUp = () => {
  // creating a new user with email and password
  const createUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);
  };

  return (
    <div className="my-6 md:my-16 w-full md:w-2/3 mx-auto">
      <h1 className="font-[archivo] text-center md:text-left text-[#0077b6] text-4xl font-bold pb-4">
        Sign Up Here!!!
      </h1>
      <form
        onSubmit={createUser}
        className="w-10/12 mx-auto md:mx-0 md:w-2/3 font-[roboto] space-y-4"
      >
        <div>
          <input
            required
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
        <div>
          <input
            required
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
        <div>
          <input
            required
            type="text"
            name="password"
            id=""
            placeholder="Your Password"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
        <div>
          <input
            required
            type="url"
            name="photoUrl"
            id=""
            placeholder="Please enter a valid URL"
            className="w-full md:w-2/3 placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full md:w-fit font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
          >
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-[#00b4d8]">
            Already have an account?{' '}
            <Link className="text-[#0077b6]" to="/sign-in">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
