// import React, { useState } from "react";
// import axios from "axios";

// const Uploads = () => {
//   const [file, setFile] = useState(null);
//   const [keyImage, setKeyImage] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleKeyImageChange = (event) => {
//     setKeyImage(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("keyImage", keyImage);
//     formData.append("name", name);
//     formData.append("email", email);

//     const username = "denji";
//     const password = "zxcvbn09876";
//     const basicAuth = btoa(`${username}:${password}`); // Encodes the credentials to base64

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/apis/encrypt/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           "Authorization": `Basic ${basicAuth}`,
//         },
//       });

//       // Handle the response as needed
//       console.log(response);
//     } catch (error) {
//       console.error("Error uploading:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col p-12 justify-evenly items-start">
//       {/* ... other input fields ... */}
//       <input type="file" name="file" id="file" className="bg-trans p-1" onChange={handleFileChange} />

//       <input type="file" name="keyImage" id="keyImage" className="p-1 bg-trans" onChange={handleKeyImageChange} />

//       {/* ... other input fields ... */}

//       <button
//         className="p-2 my-4 rounded-md bg-trans text-white bg-purple-500 "
//         type="submit"
//         onClick={handleUpload}
//       >
//         Upload
//       </button>
//     </div>
//   );
// };

// export default Uploads;

import axios from "axios";
import React, { useState } from "react";

const Uploads = () => {
  const [file, setFile] = useState(null);
  const [keyImage, setKeyImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileName = file ? file.name : '';
    setSelectedFile(fileName);
    setFile(event.target.files[0]);
  };

  const handleKeyImageChange = (event) => {
    const file = event.target.files[0];
    const fileName = file ? file.name : '';
    setKeyImage(fileName);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("image", keyImage);
    formData.append("username", name);  // Assuming "name" is the username
    // formData.append("receiver", email);  // Assuming "email" is the receiver's email
    // formData.append("file_name", file.name);

    const username = "denji";
    const password = "zxcvbn09876";
    const basicAuth = btoa(`${username}:${password}`);

    try {
      const response = await axios.post("http://127.0.0.1:8000/apis/encrypt/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Basic ${basicAuth}`,
        },
      });

      // Handle the response as needed
      console.log(response);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <div className="flex flex-col p-12 justify-evenly items-start">
      {/* ... other input fields ... */}
      <div className="flex items-center">
        <input
          type="text"
          className="mr-0 p-2 border-0 rounded-lg bg-trans text-white h-10 w-44"
          placeholder="Selected File"
          value={selectedFile}
          disabled
          readOnly
        />
        <label
          className="flex items-center px-6 py-2 bg-purple-600 rounded-lg text-white text-sm font-medium cursor-pointer hover:bg-purple-700 h-10 w-36"
          style={{ marginLeft: -2 }} // Adjust the margin-left to join the edges
        >
          <input type="file" className="hidden" id="file" onChange={handleFileChange} />
          <span className="ml-2">Choose File</span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="mr-0 p-2 border-0 rounded-lg bg-trans text-white h-10 w-44"
          placeholder="Selected Image"
          value={keyImage}
          disabled
          readOnly
        />
        <label
          className="flex items-center px-5 py-2 bg-purple-600 rounded-lg text-white text-sm font-medium cursor-pointer hover:bg-purple-700 h-10 w-36" htmlFor="keyImage"
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
        className="p-2 w-80 h-12 md:my-1 rounded-md bg-trans text-white"
      />

      <input
        type="text"
        placeholder="Safe Code"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 w-80 h-12 md:my-1 rounded-md bg-trans text-white"
      />

      <button
        className="p-2 px-16 my-2 bg-purple-700 hover:bg-purple-900 text-white rounded-md focus:outline-none focus:shadow-outline w-80 h-12"
        type="submit"
        onClick={handleUpload}
      >
        Upload File
      </button>
    </div>
  );
};

export default Uploads;
