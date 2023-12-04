import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://ekansh515.pythonanywhere.com/apis/login/", {
                username,
                password,
            });

            const token = response.data.access;
            console.log(token)
            localStorage.setItem("token", token);
            console.log("Fetched " + localStorage.getItem("token"))
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            console.log("Login successful!");
            navigate("/home");

        } catch (error) {
            // Handle login error
            setError("Invalid username or password");
            console.error("Login error:", error);
            setPassword("")
            setUsername("")
            alert(error)
            navigate("/")
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

export default LoginForm;