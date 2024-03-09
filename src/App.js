import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layouts from "./Components/Layouts";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
