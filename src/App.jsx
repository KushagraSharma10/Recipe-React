import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return ( 
  <div className="w-screen h-screen py-10 px-50 bg-zinc-800 p-5 text-white font-thin">
    <Navbar />
    <MainRoutes />
  </div>
)};

export default App;
