import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import KeyboardNinja from "./components/Games/KeyboardNinja/KeyboardNinja.js";

import "./App.css";

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
