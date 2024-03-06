import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layouts from "./Components/Layouts";
import Home from "./Pages/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
