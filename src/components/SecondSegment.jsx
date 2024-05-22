import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

const data = [
  {
    element: <IoLogoReact className="text-white text-6xl" />,
    header: "FrontEnd",
    content:
      " I am primarily a front end developer and love to work with latest frontend technologies",
  },
  {
    element: <IoLogoJavascript className="text-white text-6xl" />,
    header: "JavaScript",
    content:
      "I have always been fascinated with web technologies and I have started using javascript since 2016",
  },
  {
    element: <FaBookReader className="text-white text-6xl" />,
    header: "Technical Blogs",
    content:
      " I always look out for new technical blogs and keep myself updated with latest documentation of New technologies",
  },
];

const SecondSegment = () => {
  return (
    <div className="pb-10 px-28">
      <div className=" flex justify-center items-center text-4xl text-primary-dark dark:text-white font-bold">
        Things I Love
      </div>
      <div className="flex justify-between items-center mt-10">
        {data.map((el) => (
          <div className="w-60 h-80 m-auto flex flex-col justify-center items-center shadow-2xl bg-slate-100 dark:bg-dark-secondary dark:shadow-none rounded-lg">
            <div className="bg-primary-dark h-28 w-28 rounded-full flex justify-center items-center ">
              {el.element}
            </div>
            <div className="my-5 text-xl text-primary-dark dark:text-white">
              {el.header}
            </div>
            <div className="text-xs dark:text-white px-5">{el.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSegment;
