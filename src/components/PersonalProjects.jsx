import React from "react";
import { projectData } from "../data/projectData";
import { FaGithub } from "react-icons/fa";

const PersonalProjects = () => {
  return (
    <div>
      <div className="text-center mb-3 m-auto text-primary-dark dark:text-white text-3xl font-bold">
        Personal Projects
      </div>
      <div className=" flex flex-wrap  justify-between items-center">
        {projectData.map((data, index) => (
          <div
            key={index}
            className="w-60 min-h-80 p-2 my-7 m-auto shadow-2xl bg-slate-200 dark:bg-dark-secondary dark:shadow-none rounded-lg"
          >
            <div className=" w-full overflow-clip rounded-md  ">
              <img src={data.imageUrl} alt="" />
            </div>
            <div className="my-5 text-xl text-primary-dark dark:text-white">
              {data.name}
            </div>
            <div className="text-xs dark:text-white">{data.description}</div>
            <div className="my-2 flex justify-start items-center space-x-2">
              {data.hosted && (
                <a
                  href={data.demo}
                  target="_blank"
                  rel="noreferrer"
                  className=" flex h-10 justify-center items-center bg-gradient-to-r from-primary-light from-10% to-primary-dark to-90% text-white rounded-md px-4 text-sm"
                >
                  Live Demo
                </a>
              )}
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className=" my-2 py-4 px-4 bg-gradient-to-r from-primary-light from-10% to-primary-dark to-90% text-white rounded-full  text-sm"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
        <div className="w-60 min-h-80 bg-slate-200 flex justify-center items-center p-2 m-auto shadow-2xl dark:bg-dark-secondary dark:shadow-none rounded-lg">
          <div className=" m-auto text-white rounded-lg p-4 bg-black w-full h-full opacity-40 dark:text-white text-5xl">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
