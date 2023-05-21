import React from 'react';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect = () => {
  AOS.init({ disable: 'mobile' });
  const feedbackRecord = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    if (name && email && subject && message) {
      toast.success('Your message has been recorded', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      form.reset();
    } else {
      toast.error('Please fill all the fields', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
  };
  return (
    <div
      className="text-center space-y-3 py-4 md:py-12 w-auto overflow-x-hidden "
      data-aos="fade-left"
    >
      <h2 className="text-2xl md:text-5xl font-[archivo] text-[#0077b6] pb-3">
        Get in touch
      </h2>
      <div className="bg-[#0077b6] bg-opacity-5 p-3">
        <form
          onSubmit={feedbackRecord}
          className="w-full mx-auto md:mx-0 font-[roboto] space-y-4"
        >
          <div>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              className="w-full bg-transparent placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className="w-full bg-transparent placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              id=""
              placeholder="Subject"
              className="w-full bg-transparent placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full bg-transparent placeholder:text-[#00b4d8] border-b border-b-[#0077b6] focus:outline-none focus:border-b-[#00b4d8] text-[#0077b6] p-2"
              name="message"
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-1/3 flex flex-col items-center text-center text-white font-[roboto] bg-[#00b4d8] rounded-md p-2 text-base md:text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
