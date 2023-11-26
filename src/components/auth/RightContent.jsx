import React from "react";

import SwitchLoginRegister from "./SwitchLoginRegister";
const RightContent = ({ isLogin, onSwitch, children }) => {
    return (
        <div className="text-center md:text-left">
            <h1 className="text-white text-5xl font-bold font-poppins mb-4">
                {isLogin ? "Login" : "Sign Up"}
            </h1>
            {children}
            <SwitchLoginRegister onClick={onSwitch} isLogin={isLogin} />
        </div>
    );
};

export default RightContent