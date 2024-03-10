import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import PersonalInfo from "./Pages/PersonalInfo";

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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
