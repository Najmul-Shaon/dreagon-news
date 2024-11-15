import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState({
    name: "Shaon",
    email: "najmul.nh.shaon@gmail.com",
  });
  const authInfo = {
    user,
    SetUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
