import { Link } from "react-router-dom";
import CustomSwitch from "../utils/CustomSwitch";
import { useContext, useState } from "react";
import DarkModeContext from "../utils/DarkModeContext";
import { TbHexagonLetterKFilled } from "react-icons/tb";
import { Tooltip } from "@mui/material";

const Header = () => {
  const [check, setCheck] = useState(true);
  const { setMode } = useContext(DarkModeContext);
  const handleDarkModeChange = (e) => {
    setCheck(e.target.checked);
    e.target.checked ? setMode("dark") : setMode("");
  };
  return (
    <div className="flex justify-between items-center text-primary-dark dark:text-white dark:bg-dark-secondary w-full shadow-md py-5 px-28">
      <div className="">
        <TbHexagonLetterKFilled className=" text-5xl text-primary-dark" />{" "}
      </div>
      <div className="flex">
        <div className="flex justify-evenly space-x-6">
          <Link className="" to={"/"}>
            Home
          </Link>
          <Link className="" to={"/about"}>
            About me
          </Link>
          <Link className="" to={"/projects"}>
            Projects
          </Link>
          <Link className="" to={"/contact"}>
            Contact
          </Link>
          <Tooltip title="Coming Soon">
            {/* <Link className="" to={"/"}> */}
            <div className="text-slate-600 cursor-pointer">Blogs</div>
            {/* </Link> */}
          </Tooltip>
        </div>
        <div className=" mx-7">
          <CustomSwitch checked={check} onChange={handleDarkModeChange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
