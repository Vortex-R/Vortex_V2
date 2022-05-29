import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Digital from "../components/Digital";
import EventItem from "../components/event/EventItem";
import Pricing from "../components/event/Pricing";
import OldFooter from "../components/OldFooter";
import OldHeader from "../components/OldHeader";
import VrExperience from "../components/VrExperience";
function Home() {
  return (
    <>
      <OldHeader />
      <EventItem />
      {/* <EventBig /> */}
      <Digital />
      <VrExperience />
      <OldFooter />
      {/* <Pricing /> */}
      <Register />
      <Login />
    </>
  );
}

export default Home;
