import React from "react";
import PersonalProjects from "../components/PersonalProjects";
import MiniProjects from "../components/MiniProjects";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div className="min-h-5/6 dark:bg-dark-primary pt-5">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <PersonalProjects />
      <MiniProjects />

      <div className="py-6 text-center dark:text-white">
        Stay Tuned for more....
      </div>
    </div>
  );
};

export default Projects;
