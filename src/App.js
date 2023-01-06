import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import TheMind from './pages/games/TheMind.js';
import KeyboardNinja from "./pages/games/KeyboardNinja.js";
import UserContext from './contexts/UserContext.js';

import "./assets/App.css";

function App() {
    const [userInfo, setUserInfo] = useState({ token: "" });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Router>
            <Routes>
                <Route path="/sign-up" exact element={<Register/>} />
                <Route path="/sign-in" exact element={<Login/>} />

                <Route path="/games/1" exact element={<KeyboardNinja/>} />
                <Route path="/games/2" exact element={<TheMind/>} />

                <Route path="/games" exact element={<Home/>} />
                <Route path="/*" element={<Navigate to="/games" replace />} />
            </Routes>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
