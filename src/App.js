import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import KeyboardNinja from "./pages/Games/KeyboardNinja.js";

import "./assets/App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/games" exact element={<Home/>} />
            <Route path="/sign-up" exact element={<Register/>} />
            <Route path="/sign-in" exact element={<Login/>} />
            <Route path="/games/1" exact element={<KeyboardNinja/>} />
            <Route path="/*" element={<Navigate to="/games" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
