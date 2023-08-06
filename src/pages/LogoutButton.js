import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    window.location.replace("/home");
  };
  return (
    <div>
      {/* <button onClick={handleLogout} className="logout-button">
      Logout
    </button> */}
     
    </div>
  );
};

export default LogoutButton;
