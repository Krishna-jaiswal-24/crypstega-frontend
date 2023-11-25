import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("This is", username)
    console.log("This is pass",password)

    try {
      const response = await axios.post("http://127.0.0.1:8000/apis/login/", {
        username,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      console.log("Login successful!");
    } catch (error) {
      // Handle login error
      setError("Invalid username or password");
      console.error("Login error:", error);
    }
  };

  return (
    <form className="flex flex-col items-center md:items-start">
      <label className="text-white mt-4">Username</label>
      <input
        type="text"
        className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="text-white">Password</label>
      <input
        type="password"
        className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 px-16 my-4 bg-purple-700 hover:bg-purple-900 text-white rounded-md focus:outline-none focus:shadow-outline w-64 h-12"
        onClick={handleLogin}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};



const SignupForm = ({ username, setUsername, email, setEmail, password, setPassword, onSubmit }) => {
  return (
    <form className="flex flex-col items-center md:items-start">
      <label className="text-white mt-6">Username</label>
      <input
        type="text"
        className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="text-white mt-4">Email</label>
      <input
        type="email"
        className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="text-white mt-4">Password</label>
      <input
        type="password"
        className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 px-16 my-4 bg-purple-700 hover:bg-purple-900 text-white rounded-md focus:outline-none focus:shadow-outline w-64 h-12"
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

const RightContent = ({ isLogin, onSwitch, children }) => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-white text-5xl font-bold font-poppins mb-4">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      {children}
      <SwitchLoginRegister onClick={onSwitch} />
    </div>
  );
};


const AuthPage = ({ isLogin, onSwitch, onSubmit }) => {
  return (
    <div className="bg-login min-h-screen flex items-center justify-center">
      <MainContent />
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start ">
        <RightContent isLogin={isLogin} onSwitch={onSwitch} >
          {isLogin ? <LoginForm onSubmit={onSubmit} /> : <SignupForm onSubmit={onSubmit} />}
        </RightContent>
      </div>
    </div>
  );
};

const AuthPageContainer = () => {
  const [email, setEmail] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const handleSwitchLoginRegister = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <AuthPage
      isLogin={isLogin}
      onSwitch={handleSwitchLoginRegister}
    />
  );
};


export default AuthPageContainer;

