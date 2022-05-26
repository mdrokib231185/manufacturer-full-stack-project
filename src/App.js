import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import DashBoard from "./Pages/DashBoard/DashBoard";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home/Home";
import MyPortfulio from "./Pages/Home/MyPortfulio";


import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Pagenotfound from "./Pages/Pagenotfound";
import RequireAuth from "./Pages/RequireAuth";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import BookingProducts from "./Pages/Home/BookingProducts";
import MyOrders from "./Pages/DashBoard/MyOrders";
import MyReview from "./Pages/DashBoard/MyReview";
import MyProfile from "./Pages/DashBoard/MyProfile";
import User from "./Pages/DashBoard/User";
import RequireUser from "./Pages/RequireAdmin";
import ManageAllOrders from "./Pages/DashBoard/ManageAllOrders";
import Addproducts from "./Pages/DashBoard/Addproducts";
import Blogs from "./Pages/Blogs";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
          <Route
            path="order"
            element={
              <RequireUser>
                <MyOrders></MyOrders>
              </RequireUser>
            }
          ></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="user" element={<User></User>}></Route>
          <Route path="user" element={<User></User>}></Route>
          <Route
            path="manageOrders"
            element={<ManageAllOrders></ManageAllOrders>}
          ></Route>
          <Route
            path="addProduct"
            element={<Addproducts></Addproducts>}
          ></Route>
        </Route>

        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <BookingProducts></BookingProducts>
            </RequireAuth>
          }
        ></Route>

        <Route path="/portfulio" element={<MyPortfulio></MyPortfulio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
