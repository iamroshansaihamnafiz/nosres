import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import PersonalInfo from "./Pages/PersonalInfo";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import Accounts from "./Pages/Accounts";
import Jobs from "./Pages/Jobs";
import UserDetails from "./Pages/UserDetails";
import Hiring from "./Pages/Hiring";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                    <Route path="/personal-info" element={<PersonalInfo/>}/>
                    <Route path="/accounts" element={<Accounts/>}/>
                    <Route path="/jobs" element={<Jobs/>}/>
                    <Route path="/user-details" element={<UserDetails/>}/>
                    <Route path="/hiring" element={<Hiring/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
