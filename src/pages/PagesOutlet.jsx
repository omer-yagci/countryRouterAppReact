import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import React from "react";

export const PagesOutlet = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PagesOutlet;
