import { Link } from "react-router-dom";
import CustomSwitch from "../utils/CustomSwitch";
import { useContext, useState } from "react";
import DarkModeContext from "../utils/DarkModeContext";
import { TbHexagonLetterKFilled } from "react-icons/tb";
import { Divider, Tooltip } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import CustomDrawer from "../utils/CustomDrawer";

const navigatorLinks = [
  {
    id: 1,
    name: "Home",
    to: "/",
    disabled: false,
  },
  {
    id: 2,
    name: "About me",
    to: "/about",
    disabled: false,
  },
  {
    id: 3,
    name: "Projects",
    to: "/projects",
    disabled: false,
  },
  {
    id: 4,
    name: "Contact",
    to: "/contact",
    disabled: false,
  },
  {
    id: 5,
    name: "Blogs",
    to: "/blogs",
    disabled: true,
  },
];

const Header = () => {
  const [check, setCheck] = useState(true);
  const [openNav, setOpenNav] = useState(false);
  const { setMode } = useContext(DarkModeContext);
  const handleDarkModeChange = (e) => {
    setCheck(e.target.checked);
    e.target.checked ? setMode("dark") : setMode("");
  };

  return (
    <div className="w-screen fixed top-0 z-30">
      <div className="flex justify-between bg-white items-center text-primary-dark dark:text-white dark:bg-dark-secondary w-full shadow-md py-2 px-28 portrait:px-4">
        <div className="">
          <TbHexagonLetterKFilled className=" text-5xl text-primary-dark" />{" "}
        </div>
        <div className="landscape:hidden">
          <GiHamburgerMenu onClick={() => setOpenNav(!openNav)} />
        </div>
        <div className="flex portrait:hidden justify-evenly space-x-6 ">
          {navigatorLinks.map((link) => {
            return link.disabled ? (
              <Tooltip key={link.id} title={<p>Coming Soon</p>}>
                <div className="text-slate-600 cursor-pointer">{link.name}</div>
              </Tooltip>
            ) : (
              <Link key={link.id} className="" to={link.to}>
                {link.name}
              </Link>
            );
          })}
          <div className=" mx-7">
            <CustomSwitch checked={check} onChange={handleDarkModeChange} />
          </div>
        </div>
      </div>

      <CustomDrawer open={openNav} side="left" setOpen={setOpenNav}>
        <div className="w-full h-full dark:text-white dark:bg-dark-secondary">
          {navigatorLinks.map((link) => {
            return link.disabled ? (
              <div key={link.id} className=" w-full  dark:bg-dark-secondary">
                <Tooltip title={<p>Coming Soon</p>}>
                  <div className="p-2 text-slate-600 cursor-pointer">
                    {link.name}
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div key={link.id} className="p-2 ">
                <Link
                  // className="w-full dark:bg-dark-secondary"
                  to={link.to}
                >
                  {link.name}
                </Link>
                <Divider />
              </div>
            );
          })}
        </div>
      </CustomDrawer>
    </div>
  );
};

export default Header;
