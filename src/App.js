import './App.css';
import Register from './pages/Register';
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Protected from './pages/Protected';
import Navbar from './components/Navbar';
import SmartNotes from './pages/SmartNotes';
import Profile from './pages/Profile';
import EditNote from './pages/EditNote';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';

//axios configuration===============


function App() {

  const token = useSelector(state => state.user.token);

  //Configuration Axios-------------------
  axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.withCredentials = true;
  //--------------------------------------



  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          {/* protected routes-------------------------------------- */}
          <Route path='/dashboard' element={<Protected><Dashboard /></Protected>} />
          <Route path='/notes' element={<Protected><SmartNotes /></Protected>} />
          <Route path='/profile' element={<Protected><Profile /></Protected>} />
          <Route path='/edit-note/:id' element={<Protected><EditNote /></Protected>} />

          <Route path='*' element={<h1>Resource not found</h1>} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
