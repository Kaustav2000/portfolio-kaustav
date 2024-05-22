import { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import DarkModeContext from "../utils/DarkModeContext";
import Footer from "./Footer";

const MainPage = () => {
  const { mode } = useContext(DarkModeContext);

  return (
    <div className={`max-w-screen h-screen ${mode}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
