import React, { useState } from "react";
import LoginForm from "./LoginForm";
import MainContent from "./MainContent";
import RightContent from "./RightContent";
import SignUpForm from "./SignUpForm";

const AuthPage = ({ isLogin, onSwitch }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-login min-h-screen flex items-center justify-center">
            <MainContent />
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start ">
                <RightContent isLogin={isLogin} onSwitch={onSwitch} >
                    {isLogin ? <LoginForm /> : <SignUpForm
                        username={username}
                        setUsername={setUsername}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />}
                </RightContent>
            </div>
        </div>
    );
};

export default AuthPage;