import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layouts from "./Components/Layouts";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
