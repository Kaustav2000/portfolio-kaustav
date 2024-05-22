import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const UserForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-slate-200 dark:bg-dark-secondary w-1/2 p-4 my-20 shadow-md rounded-md">
      <div className="text-center mb-3 m-auto text-primary-dark dark:text-white text-3xl font-bold">
        Want to get in touch?
      </div>
      <form action="">
        <div className="flex space-x-2 justify-between items-center">
          <div className="w-1/2">
            <div className="dark:text-white py-4">Email</div>
            <input
              className="w-full p-2 rounded-md"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="w-1/2">
            <div className="dark:text-white py-4">Name</div>
            <input
              className="w-full p-2 rounded-md"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="dark:text-white py-4">Message</div>
          <textarea
            className="w-full pl-2 rounded-md"
            type="text"
            rows={5}
            cols={50}
            placeholder="Hey, type your message"
          />
        </div>
        {/* <input type="submit" value="Submit" /> */}
        <div className=" flex justify-end items-center">
          <button
            onClick={handleSubmit}
            className=" bg-gradient-to-r flex justify-between items-center  from-primary-light from-10% to-primary-dark to-90% text-white rounded-md px-4 py-2 text-sm"
          >
            <FaPaperPlane className="mr-1" /> Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
