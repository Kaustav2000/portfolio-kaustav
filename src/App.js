import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRouter from "./routes/routes";
import { useState } from "react";
import DarkModeContext from "./utils/DarkModeContext";

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <DarkModeContext.Provider value={{ mode: mode, setMode }}>
      <RouterProvider router={appRouter} />
    </DarkModeContext.Provider>
  );
}

export default App;
