import axios from "axios";
import React, { useState } from "react";

const Uploads = () => {
  const [file, setFile] = useState(null);
  const [keyImage, setKeyImage] = useState(null);
  const [name, setName] = useState("");
  const [safeCode, setSafeCode] = useState("");
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {

    const file = event.target.files[0];

    const fileName = file ? file.name : '';
    setSelectedFile(fileName);
    setFile(event.target.files[0]);
  };

  const handleKeyImageChange = (event) => {

    const image = event.target.files[0];

    const imageName = image ? image.name : '';
    setKeyImage(image);

  };

  const handleUpload = async () => {

    const formData = new FormData();
    formData.append("file_name", file);
    formData.append("file", file);
    formData.append("image", keyImage);
    formData.append("username", name);
    formData.append('safe_code', safeCode);


    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      console.error("JWT token is missing");
      return;
    }
    console.log(jwtToken)

    try {
      const response = await axios.post("https://crypstega.onrender.com/apis/encrypt/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${jwtToken}`,
        },
       
      });
      alert("File uploaded successfully");
      setFile(null);
      setKeyImage(null);
      setName("");
      setSafeCode("");
      setSelectedFile("");
      // Handle the response as needed

    } catch (error) {
      console.error("Error uploading:", error);
      alert("File couldn't be uploaded")
    }
  };

  return (
    <div className="flex flex-col p-12  h-full justify-evenly items-start " style={{ height: "70vh" }}>
      <h1 className="text-white text-xl mb-4">Upload Files</h1>
      <div className="flex items-center">
        <input
          type="text"
          className="mr-0 p-2 border-0 rounded-lg bg-trans text-white h-12 w-48"
          placeholder="Selected File"
          value={selectedFile}
          disabled
          readOnly
        />
        <label
          className="flex items-center px-6 py-2 bg-purple-600 rounded-lg text-white text-sm font-medium cursor-pointer hover:bg-purple-700 h-12 w-40"
          style={{ marginLeft: -2 }} // Adjust the margin-left to join the edges
        >
          <input type="file" className="hidden" id="file" onChange={handleFileChange} />
          <span className="ml-2">Choose File</span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="mr-0 p-2 border-0 rounded-lg bg-trans text-white h-12 w-48"
          placeholder="Selected Image"
          value="image"
          disabled
          readOnly
        />
        <label
          className="flex items-center px-5 py-2 bg-purple-600 rounded-lg text-white text-sm font-medium cursor-pointer hover:bg-purple-700 h-12 w-40" htmlFor="keyImage"
          style={{ marginLeft: -2 }} // Adjust the margin-left to join the edges
        >
          <input type="file" className="hidden" id="keyImage" onChange={handleKeyImageChange} />
          <span className="ml-0">Choose Image</span>
        </label>
      </div>


      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 w-full h-14 md:my-1 rounded-md bg-trans text-white"
      />

      <input
        type="text"
        placeholder="Safe Code"
        value={safeCode}
        onChange={(e) => setSafeCode(e.target.value)}
        className="p-2 w-full h-14 md:my-1 rounded-md bg-trans text-white"
      />

      <button
        className="p-2 px-16 my-2 bg-purple-700 hover:bg-purple-900 text-white rounded-md focus:outline-none focus:shadow-outline w-full h-14"
        type="submit"
        onClick={handleUpload}
      >
        Upload File
      </button>
    </div>
  );
};

export default Uploads;
