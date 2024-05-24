import React from "react";
import CustomTimeline from "../utils/CustomTimeline";

const Experience = () => {
  return (
    <div className="flex flex-col w-2/3 portrait:w-full">
      <div className="m-auto dark:text-white text-3xl font-bold">
        Experience
      </div>
      <CustomTimeline />
    </div>
  );
};

export default Experience;
