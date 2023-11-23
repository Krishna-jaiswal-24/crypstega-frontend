import React, { useState } from "react";
import axios from "axios";

const SignupForm = ({ username, setUsername, email, setEmail, password, setPassword, onSubmit }) => {
  return (
    <form className="flex flex-col items-center md:items-start">
      <label className="text-white mt-4">Username</label>
      <input
        type="text"
        className="p-2 w-max my-2 md:my-4 rounded-md bg-trans"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="text-white mt-4">Email</label>
      <input
        type="email"
        className="p-2 w-max my-2 md:my-4 rounded-md bg-trans"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="text-white">Password</label>
      <input
        type="password"
        className="p-2 my-2 md:my-4 rounded-md bg-trans"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 px-16 my-4 bg-purple-700 hover:bg-purple-900 text-white rounded-md focus:outline-none focus:shadow-outline w-max"
        onClick={onSubmit}
      >
        Sign Up
      </button>
    </form>
  );
};


const MainContent = () => {
  return (
    <div className="text-center md:text-left pr-56">
      <h1 className="text-5xl md:text-8xl text-white font-bold mb-4">
        Crypstega
      </h1>
      <p className="text-2xl text-white my-8">Secure, Share, Store </p>
    </div>
  );
};

const SwitchLoginRegister = ({ onClick }) => {
  return (
    <label className="text-white">
      Already have an account?{" "}
      <span className="cursor-pointer text-blue-500" onClick={onClick}>
        Login
      </span>
    </label>
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Django backend with user's email and password
      const response = await axios.post("http://127.0.0.1:8000/apis/login/", {
        email,
        password,
      });

      // Handle the successful response here
      console.log("Signup successful:", response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error signing up:", error);
    }
  };

  const handleSwitchLoginRegister = () => {
    // Implement switching to the login form if needed
  };

  return (
    <div className="bg-login min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <MainContent />
        <div className="text-center md:text-left">
          <h1 className="text-white text-5xl font-bold font-poppins mb-4">
            Sign Up
          </h1>
          <SignupForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleFormSubmit}
            username={username}
          />
          <SwitchLoginRegister onClick={handleSwitchLoginRegister} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
