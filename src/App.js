import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Pages/About";
import DashBoard from "./Pages/DashBoard/DashBoard";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home/Home";
import MyPortfulio from "./Pages/Home/MyPortfulio";

import Review from "./Pages/Home/Review";
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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="user" element={<User></User>}></Route>
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
