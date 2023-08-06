import React from "react";
import CustomNavbar from "./CustomNavbar";
import LogoutButton from "../pages/LogoutButton";
const Base = ({ title = "welcome to our Hotel", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      <LogoutButton />

      {children}
    </div>
  );
};

export default Base;
