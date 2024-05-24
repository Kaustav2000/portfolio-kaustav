import React from "react";
import skillData from "../data/skillData";

const Skills = () => {
  return (
    <div className="w-1/3 portrait:w-full portrait:m-3">
      <div className="m-auto dark:text-white text-3xl font-bold">Skills</div>
      <div className="w-full ">
        {skillData.map((skill) => (
          <div
            key={skill.name}
            className="flex justify-start items-center my-2 mr-4 p-4 px-10 shadow-md ring-2  dark:ring-slate-700 rounded-md"
          >
            <img
              src={skill.image}
              className="w-10 aspect-square rounded-full"
              alt=""
            />{" "}
            <p className="ml-5 text-2xl font-semibold dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
