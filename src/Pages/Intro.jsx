import React from "react";
import FirstSegment from "../components/FirstSegment";
import SecondSegment from "../components/SecondSegment";
import { Helmet } from "react-helmet";

const Intro = () => {
  return (
    <div className="min-h-5/6 w-screen dark:bg-dark-primary ">
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <FirstSegment />
      <SecondSegment />
    </div>
  );
};

export default Intro;
