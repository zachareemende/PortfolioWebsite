import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <section>
        <div className="p-12 mx-auto max-w-screen-md ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Me
          </h2>
          <h3 className="mb-4 text-lg text-center text-gray-600">
            Fill out the form below and I will get back to you as soon as I can.
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-8" data-netlify="true">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              
              <input
                type="text" 
                name="user_name"
                id="name"
                className="block p-3 w-full text-sm text-white rounded-lg border  shadow-sm  bg-gray-700 border-gray-600"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email" 
                name="user_email"
                className="shadow-sm border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700  "
                placeholder="name@email.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message" 
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-white  rounded-lg shadow-sm border bg-gray-700 border-gray-600 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit" 
              value="Send"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit  p-3 bg-violet-600 flex mx-auto md:mx-0"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
