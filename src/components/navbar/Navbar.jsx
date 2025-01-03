import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  const nabLinks = (
    <>
      {" "}
      <li>
        <NavLink to="home">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signUP">Sign UP</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {nabLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      {/* <div className="navbar-center hidden ">
        <ul className="menu menu-horizontal lg:flex px-1"> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nabLinks}</ul>
      </div>
      {user?.email ? (
        <>
          <p>{user?.email}</p>

          <div onClick={handleLogout} className="navbar-end">
            <a className="btn">LogOut</a>
          </div>
        </>
      ) : (
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
