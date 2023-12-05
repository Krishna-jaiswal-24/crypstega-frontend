import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import Navbar from "../components/Navbar";
import Uploads from "../components/Uploads";

const Home = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://ekansh515.pythonanywhere.com/apis/received_files/", {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

          },
        });
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg">
      <Navbar />
      <div className="flex justify-between flex-auto h-full ">
        <div className="w-8/12 overflow-y-auto">

          <h1 className="text-white text-xl mb-16">Recieved Files</h1>
          {files.map(file => (
            <Cards
              key={file.file_id}
              fileId={file.file_id}
              receivedDate={file.upload_date}
              sender={file.from} />
          ))}
        </div>
        <Uploads />
      </div>
    </div>
  );
};

export default Home;
