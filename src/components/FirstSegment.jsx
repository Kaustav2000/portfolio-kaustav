import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import dp from "../assets/DP.jpg";
// import resume from "../assets/"
import resume from "../assets/resume.pdf";

const FirstSegment = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "kaustav-resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex mb-5 py-36 px-52">
      <div className="w-1/2 space-y-2">
        <div className="">
          <div className="text-dark-primary dark:text-white">Hello, I'm</div>
          <div className="text-dark-primary dark:text-white font-extrabold text-5xl drop-shadow-2xl">
            KAUSTAV BHATTACHARYA
          </div>
          <div className="text-dark-primary dark:text-white text-2xl">
            FRONT-END WEB DEVELOPER
          </div>
        </div>
        <button
          onClick={onButtonClick}
          className=" bg-gradient-to-r from-primary-light from-10% to-primary-dark to-90% text-white rounded-md px-4 py-2 text-sm"
        >
          Download Resume
        </button>
        <div className="flex space-x-5">
          <a
            href="https://github.com/Kaustav2000"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="my-3 text-3xl text-primary-dark cursor-pointer " />
          </a>

          <a
            href="https://www.linkedin.com/in/kaustav-bhattacharya-6731b517a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="my-3 text-3xl text-primary-dark cursor-pointer" />
          </a>
          <a
            href="https://x.com/kbhattacharya75"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="my-3 text-3xl text-primary-dark cursor-pointer" />
          </a>
        </div>
      </div>
      <div className=" w-1/2 flex justify-center items-center ">
        <img
          src={dp}
          alt="Profile pic"
          className="h-64 rounded-full ring-4 ring-primary-dark dark:ring-white "
        />
      </div>
    </div>
  );
};

export default FirstSegment;
