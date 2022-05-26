import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Digital from "../components/Digital";
import EventItem from "../components/event/EventItem";
import Pricing from "../components/event/Pricing";
import VrExperience from "../components/VrExperience";
function Home() {
  return (
    <>
      <EventItem />
      {/* <EventBig /> */}
      <Digital />
      <VrExperience />
      {/* <Pricing /> */}
      <Register />
      <Login />
    </>
  );
}

export default Home;
