import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    console.log("Logout successful!");
    navigate("/");
    
  };
  return (
    <nav className="flex flex-auto justify-between items-center p-8 bg-trans">
      <ul className="flex justify-around items-center">
        <li className="text-2xl px-10 text-white font-bold">Crypstega</li>
      </ul>
      <h1 className="mx-4 text-white text-2xl" onClick={logOut}>Log Out</h1>
    </nav>
  );
};

export default Navbar;
