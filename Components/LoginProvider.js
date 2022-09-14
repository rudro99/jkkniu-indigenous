import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [currentuser, setcurrentuser] = useState({});
  return (
    <LoginContext.Provider
      value={{ isLoggedin, setisLoggedin, currentuser, setcurrentuser }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
