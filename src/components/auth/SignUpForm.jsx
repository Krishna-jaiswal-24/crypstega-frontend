import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setUsername, setEmail, setPassword, }) => {
    const [username, setLocalUsername] = useState("");
    const [email, setLocalEmail] = useState("");
    const [password, setLocalPassword] = useState("");
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post("http://ekansh515.pythonanywhere.com/apis/register/", {
                username,
                email,
                password
            });
            console.log("Successfully registered")
            navigate("/");

            const loginResponse = await axios.post("http://ekansh515.pythonanywhere.com/apis/login/", {
                username,
                password,
            });

            const token = loginResponse.data.access;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            console.log("Login successful!");

            navigate("/home");

        } catch (error) {

            console.error("Registration error:", error);
        }
    }
    return (
        <form className="flex flex-col items-center md:items-start">
            <label className="text-white mt-6">Username</label>
            <input
                type="text"
                className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
                value={username}
                onChange={(e) => setLocalUsername(e.target.value)}
            />
            <label className="text-white mt-4">Email</label>
            <input
                type="email"
                className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
                value={email}
                onChange={(e) => setLocalEmail(e.target.value)}
            />
            <label className="text-white mt-4">Password</label>
            <input
                type="password"
                className="p-2 w-64 h-12 my-2 md:my-4 rounded-md bg-trans text-white"
                value={password}
                onChange={(e) => setLocalPassword(e.target.value)}
            />
            <button
                className="p-2 px-16 my-4 bg-purple-700 hover:bg-purple-900 text-white rounded-md focus:outline-none focus:shadow-outline w-64 h-12"
                onClick={handleSignUp}
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;