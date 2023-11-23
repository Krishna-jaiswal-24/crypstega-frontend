import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-auto justify-between items-center p-8 bg-trans">
      <ul className="flex justify-around items-center">
        <li className="text-2xl px-10 text-white font-bold">Crypstega</li>
        <li className="text-xl px-10 text-white">Your Account</li>
        <li className="text-xl px-10 text-white">Uploaded Files</li>
      </ul>
      <h1 className="mx-4 text-white text-2xl">Hey User!</h1>
    </nav>
  );
};

export default Navbar;
