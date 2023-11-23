import React from "react";
import Navbar from "../components/Navbar";
import { Cards } from "../Components/Cards";
import Uploads from "../components/Uploads";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between flex-auto p-12 ">
        <div className="w-8/12">
        <h1 className="text-white text-xl mb-16">Recieved Files</h1>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Uploads />
      </div>
    </div>
  );
};

export default Home;
