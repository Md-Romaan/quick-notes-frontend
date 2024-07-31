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
import { baseURL } from './constant';

//axios configuration===============


function App() {

  const token = useSelector(state => state.user.token);

  //Configuration Axios-------------------
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.withCredentials = true;
  //--------------------------------------


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />

          {/* protected routes-------------------------------------- */}
          <Route path='/dashboard' element={<Protected><Dashboard /></Protected>} />
          <Route path='/notes' element={<Protected><SmartNotes /></Protected>} />
          <Route path='/profile' element={<Protected><Profile /></Protected>} />
          <Route path='/edit-note/:id' element={<Protected><EditNote /></Protected>} />



          <Route path='*' element={<h1>Resource not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
