import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/00125d6f-db88-4e33-9bc8-ea7ad540427d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h1 className="text-5xl font-bold inline border-b-4 border-white text-[#ccd6f6]">
            Contact
          </h1>
          <p className="text-gray-300 py-4">
            Feel free to get in touch with me about any open opportunities below
            or by email{" "}
            <a href="mailto: danielndri1@gmail.com">danielndri1@gmail.com</a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#0a192f] hover:border-[#ccd6f6] duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
