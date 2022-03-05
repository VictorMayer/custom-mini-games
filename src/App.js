import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import KeyboardNinja from "./pages/games/KeyboardNinja.js";
import UserContext from './contexts/UserContext.js';

import "./assets/App.css";

function App() {
    const [userInfo, setUserInfo] = useState({ token: "" });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <BrowserRouter>
            <Routes>
                <Route path="/games" exact element={<Home/>} />
                <Route path="/sign-up" exact element={<Register/>} />
                <Route path="/sign-in" exact element={<Login/>} />
                <Route path="/games/1" exact element={<KeyboardNinja/>} />
                <Route path="/*" element={<Navigate to="/games" replace />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
