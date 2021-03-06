
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebaseinit";
import img1 from '../../images/logo.png'


const Navbar = () => {
      const [user] = useAuthState(auth)
      const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
      }
  const menuItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/blog">BLOG</Link>
      </li>

      <li>
        <Link to="/portfulio">PORTFOLIO</Link>
      </li>

      <li>
        {user && <Link to="/dashboard">DASHBOARD</Link>}

        {user ? (
          <button className="btn btn-active btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar  bg-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost  lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-center">
          <label
            tabIndex="1"
            html="dashboard-sidebar"
            className="btn btn-ghost lg:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
          </label>
        </div>
      </div>
      <div className="navbar-end">
        <label
          for="my-drawer-2"
          tabIndex="0"
          className="btn btn-ghost  lg:hidden"
        >
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
        </label>
        
      </div>
    </div>
  );
};

export default Navbar;
