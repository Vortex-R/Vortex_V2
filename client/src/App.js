// React Required
import React from "react";

// Create Import File
import "./main.scss";

// Common Layout
import Home from "./pages/Home";

import Badge from "./pages/Badge";
import Group from "./pages/Group";
import Storie from "./pages/Storie";
import Member from "./pages/Member";
import Email from "./pages/Email";
import Emailopen from "./pages/Emailopen";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Contactinfo from "./pages/Contactinfo";
import Socialaccount from "./pages/Socialaccount";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Notification from "./pages/Notification";
import Helpbox from "./pages/Helpbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Notfound from "./pages/Notfound";

import ShopOne from "./pages/ShopOne";
import ShopTwo from "./pages/ShopTwo";
import ShopThree from "./pages/ShopThree";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Chat from "./pages/Chat";
import Live from "./pages/Live";
import Job from "./pages/Job";
import Event from "./pages/Event";
import Hotel from "./pages/Hotel";
import Videos from "./pages/Videos";
import Comingsoon from "./pages/Comingsoon";

import Grouppage from "./pages/Grouppage";
import Userpage from "./pages/Userpage";
import Authorpage from "./pages/Authorpage";
import Hotelsingle from "./pages/Hotelsingle";
import Analytics from "./pages/Analytics";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/home`}
            element={<Home />}
          /> */}
          <Route path="/home" element={<Home />} />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultbadge`}
            element={<Badge />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultgroup`}
            element={<Group />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultstorie`}
            element={<Storie />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultemailbox`}
            element={<Email />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultemailopen`}
            element={<Emailopen />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultsettings`}
            element={<Settings />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultvideo`}
            element={<Videos />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultanalytics`}
            element={<Analytics />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/accountinformation`}
            element={<Account />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultmember`}
            element={<Member />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contactinformation`}
            element={<Contactinfo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/socialaccount`}
            element={<Socialaccount />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/password`}
            element={<Password />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/payment`}
            element={<Payment />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultnotification`}
            element={<Notification />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/helpbox`}
            element={<Helpbox />}
          />
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            element={<Login />}
          /> */}
          <Route path="/login" element={<Login />} />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/register`}
            element={<Register />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/forgot`}
            element={<Forgot />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/notfound`}
            element={<Notfound />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop1`}
            element={<ShopOne />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop2`}
            element={<ShopTwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop3`}
            element={<ShopThree />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/singleproduct`}
            element={<Singleproduct />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/cart`}
            element={<Cart />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/checkout`}
            element={<Checkout />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultmessage`}
            element={<Chat />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultlive`}
            element={<Live />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultjob`}
            element={<Job />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultevent`}
            element={<Event />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaulthotel`}
            element={<Hotel />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/grouppage`}
            element={<Grouppage />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/userpage`}
            element={<Userpage />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/authorpage`}
            element={<Authorpage />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            element={<Comingsoon />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaulthoteldetails`}
            element={<Hotelsingle />}
          />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
