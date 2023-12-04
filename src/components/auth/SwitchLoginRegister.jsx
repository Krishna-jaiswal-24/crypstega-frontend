import React from "react";

const SwitchLoginRegister = ({ onClick, isLogin }) => {
  return (
    <label className="text-white">
      {isLogin ? (
        <div>
          First time?{" "}
          <span className="cursor-pointer text-blue-500" onClick={onClick}>
            SignUp
          </span>
        </div>
      ) : (
        <div>
          Existing User?{" "}
          <span className="cursor-pointer text-blue-500" onClick={onClick}>
            Login
          </span>
        </div>
      )}
    </label>
  );
};

export default SwitchLoginRegister;
