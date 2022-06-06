import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OldFooter from "./components/OldFooter";
import OldHeader from "./components/OldHeader";
import { Calendar, Customers, Employees, Orders } from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Streaming from "./pages/Streaming";

function App() {
  return (
    <>
      <Router>
        {/* <OldHeader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details" element={<EventDetails />} />
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/customers" element={<Customers />} /> */}
          <Route path="/employees" element={<Employees />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/event-form" element={<Event />} />
          <Route path="/streaming" element={<Streaming />} />
        </Routes>
        {/* <OldFooter /> */}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
