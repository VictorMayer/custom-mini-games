import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import TheMind from "./components/Games/TheMind/TheMind.js";
import KeyboardNinja from "./components/Games/KeyboardNinja/KeyboardNinja.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign-up" exact component={Register} />
            <Route path="/sign-in" exact component={Login} />
            <Route path="/the-mind" exact component={TheMind} />
            <Route path="/keyboard-typer-ninja" exact component={KeyboardNinja} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
