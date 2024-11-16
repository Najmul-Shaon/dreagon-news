import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user, logOut);
  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="btn btn-outline">
        {user && user.email}
      </Link>
      <div className="nav space-x-5">
        <Link tp="/">Homee</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          {user && user.email ? (
            <div>
              <img src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <Link onClick={logOut} className="btn btn-neutral rounded-none">
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
