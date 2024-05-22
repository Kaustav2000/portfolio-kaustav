import { TbHexagonLetterKFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="flex bg-primary-dark justify-between items-center text-white dark:bg-dark-secondary w-full shadow-md py-4 px-28">
      <div className="">
        <TbHexagonLetterKFilled className=" text-5xl text-white" />{" "}
      </div>

      <div className=" text-lg space-x-2">
        Made with{" "}
        <a
          href="https://react.dev/"
          className="hover:text-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="hover:text-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind{" "}
        </a>
        by{" "}
        <a
          href="https://www.linkedin.com/in/kaustav-bhattacharya-6731b517a/"
          className="hover:text-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          Kaustav Bhattacharya
        </a>
      </div>
    </div>
  );
};

export default Footer;
