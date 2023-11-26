import React, { useState } from "react";
import AuthPage from "../components/auth/AuthPage";


const AuthPageContainer = () => {

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