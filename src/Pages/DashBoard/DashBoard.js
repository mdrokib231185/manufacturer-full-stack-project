import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebaseinit";
import useAdmin from "../../Hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl">Dashboard </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>

          {!admin && (
            <li>
              <Link to="/dashboard/order">My Orders</Link>
            </li>
          )}

          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          {admin && (
            <>
            <li>
              <Link to="/dashboard/user">Users</Link>
              </li>
            <li>
              <Link to="/dashboard/manageOrders">ManageAll Orders</Link>
              </li>
            <li>
              <Link to="/dashboard/addProduct">Add Products</Link>
              </li>

            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
