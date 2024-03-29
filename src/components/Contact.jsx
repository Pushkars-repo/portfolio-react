import React from "react";

const Contact = () => {

  return (
    <div
    
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 md:pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 md:py-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center flex-col items-center gap-8 px-12 sm:pr-4">
        <form
            action="https://formkeep.com/f/9a8824199984"
            accept-charset="UTF-8"
            enctype="multipart/form-data"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
