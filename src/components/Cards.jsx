import React, { useState } from "react";

export const Cards = ({ fileId, receivedData, sender }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleFileChange = (event) => {
    const image = event.target.files[0];
    const imageName = image ? image.name : "";
    setSelectedImage(imageName);
    setFile(event.target.files[0]);
  };

  const handleDecryptAndDownload = () => {
    // Add logic for decryption and download here
    alert("Decrypting and downloading...");
  };

  return (
    <div>
      <ul
        className="flex flex-auto justify-between flex-col flex-start p-8 bg-trans my-8 rounded-lg hover:bg-gray-400 cursor-pointer"
        onClick={openModal} // Open the modal when the card is clicked
      >
        <li className="text-white">File ID: {fileId}</li>
        <li className="text-white">Received on: {receivedData}</li>
        <li className="text-white">From: {sender}</li>
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal"
          style={{
            backgroundColor: "rgba(22, 23, 29, 1)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal-content h-80 w-96"
            style={{
              backgroundColor: "rgba(22, 23, 29, 1)",
              padding: "20px",
              borderRadius: "8px",
              position: "relative", // Added position relative for absolute positioning of 'x' button
            }}
          >
            <span
              className="close"
              onClick={closeModal}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              &times;
            </span>
            <div className="modal-body flex items-start justify-center align-middle flex-col">
              <h2 className="text-white mt-4">File Id: {fileId}</h2>
              <div className="dark-bg" style={{ marginBottom: "20px" }}>
                <div className="flex mt-6 items-center">
                  <input
                    type="text"
                    className="mr-0 p-2 border-0 rounded-lg bg-trans text-white h-12 w-48"
                    placeholder="Selected File"
                    value={selectedImage}
                    disabled
                    readOnly
                  />
                  <label
                    className="flex items-center px-6 py-2 bg-purple-600 rounded-lg text-white text-sm font-medium cursor-pointer hover:bg-purple-700 h-12 w-40"
                    style={{ marginLeft: -2 }} // Adjust the margin-left to join the edges
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="file"
                      onChange={handleFileChange}
                    />
                    <span className="ml-2">Choose Image</span>
                  </label>
                </div>
                <input
                  type="text"
                  className="mr-0 mt-6 p-2 border-0 rounded-lg bg-trans text-white h-12 w-full"
                  placeholder="Safe Code"
                />
              </div>
              <button
                onClick={handleDecryptAndDownload}
                style={{
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                className="w-full bg-purple-600 mt-4"
              >
                Decrypt and Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
