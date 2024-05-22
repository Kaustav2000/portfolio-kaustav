import React from "react";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const About = () => {
  return (
    <div className="min-h-5/6 dark:bg-dark-primary flex justify-between pt-5">
      <Experience />
      <Skills />
    </div>
  );
};

export default About;
