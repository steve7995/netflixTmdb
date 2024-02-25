import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext.jsx";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute w-full flex items-center justify-between p-4 z-50 ">
      <Link to="/">
        <h1 className="uppercase font-nsans-medium cursor-pointer text-5xl text-red-600">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="px-2 cursor-pointer">Profile</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="px-2 cursor-pointer">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
              Signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
