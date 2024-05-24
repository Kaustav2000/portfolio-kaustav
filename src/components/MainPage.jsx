import { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import DarkModeContext from "../utils/DarkModeContext";
import Footer from "./Footer";

const MainPage = () => {
  const { mode } = useContext(DarkModeContext);

  return (
    <div className={`max-w-screen min-h-screen overflow-x-hidden ${mode}`}>
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
