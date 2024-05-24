import React from "react";
import FirstSegment from "../components/FirstSegment";
import SecondSegment from "../components/SecondSegment";

const Intro = () => {
  return (
    <div className="min-h-5/6 w-screen dark:bg-dark-primary ">
      <FirstSegment />
      <SecondSegment />
    </div>
  );
};

export default Intro;
