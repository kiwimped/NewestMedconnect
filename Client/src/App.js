import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import  Home  from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/login/register";
import  LoginNEW  from "./pages/login/loginnew";
import  RegisterNEW  from "./pages/login/registernew";
import { DoctorDash } from "./pages/doctor/DoctorDash";
import  Account  from "./pages/account/account";
import { Notification } from "./pages/notify/notification";
import { Appointments } from "./pages/appointments/appointments";
import { AI } from "./pages/AI/AI";
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from "./context/userContext";
import Logout from "./pages/login/logout";
import './styles.css';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export default function App() {
  return (
<UserContextProvider>
    <div className="App">
          
      <Toaster position="bottom-right" toastOptions={{duration: 2000}}/>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginNEW" element={<LoginNEW />} />
          <Route path="/registerNEW" element={<RegisterNEW />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notify" element={<Notification />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/AI" element={<AI />} />
          <Route path="/logout" element={<Logout/>} />

          <Route path="/doctor" element={<DoctorDash />} />
        </Routes>
      </BrowserRouter>

    </div>
    </UserContextProvider>
  );
}
