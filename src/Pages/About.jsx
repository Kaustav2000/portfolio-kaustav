import React from "react";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-5/6 dark:bg-dark-primary flex flex-wrap-reverse justify-between pt-5">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Experience />
      <Skills />
    </div>
  );
};

export default About;
