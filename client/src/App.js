import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header";
import Dashbord from "./pages/Dashbord";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Organizer from "./pages/Organizer";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Home from "./pages/Home";

import "./assets/scss/themes.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
