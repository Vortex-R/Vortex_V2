import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header";
import Dashbord from "./pages/Dashbord";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Organizer from "./pages/Organizer";
import Users from "./pages/Users";
import Register from "./pages/Register";


function App() {
  return (
    <>
<Router>
  <div className="container">
<Header/>
<Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/dashbord' element={ <Dashbord/> } />
    <Route path='/login' element={ <Login/> } />
    <Route path='/register' element={ <Register/> } />
    <Route path='/profile' element={ <Profile/> } />
    <Route path='/organizer' element={ <Organizer/> } />
    <Route path='/users' element={ <Users/> } />
</Routes>
  </div>
</Router>
<ToastContainer/>
    </>
  );
}

export default App;
