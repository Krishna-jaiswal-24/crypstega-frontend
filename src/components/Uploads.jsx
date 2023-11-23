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

import React, { useState } from "react";
import axios from "axios";

const Uploads = () => {
  const [file, setFile] = useState(null);
  const [keyImage, setKeyImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleKeyImageChange = (event) => {
    setKeyImage(event.target.files[0]);
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
      <input type="file" name="file" id="file" className="bg-trans p-1" onChange={handleFileChange} />

      <input type="file" name="keyImage" id="keyImage" className="p-1 bg-trans" onChange={handleKeyImageChange} />

      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 my-4 rounded-md bg-trans"
      />

      <input
        type="email"
        placeholder="Receiver's Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 my-4 rounded-md bg-trans"
      />

      <button
        className="p-2 my-4 rounded-md bg-trans text-white bg-purple-500 "
        type="submit"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default Uploads;
