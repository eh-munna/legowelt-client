import { Link } from 'react-router-dom';

const SignIn = () => {
  // signing in a new user with email password
  const userSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="my-6 md:my-16 w-full md:w-2/3 mx-auto">
      <h1 className="font-[archivo] text-center md:text-left text-[#0077b6] text-4xl font-bold pb-4">
        Sign In Here!!!
      </h1>
      <form
        onSubmit={userSignIn}
        className="w-10/12 mx-auto md:mx-0 md:w-2/3 font-[roboto] space-y-4"
      >
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
          <button
            type="submit"
            className="w-full md:w-fit font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg text-[#fff]"
          >
            Sign In
          </button>
        </div>
        <div>
          <p className="text-[#00b4d8]">
            Don&apos;t have an account?{' '}
            <Link className="text-[#0077b6]" to="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
