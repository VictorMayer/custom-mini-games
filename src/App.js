import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import KeyboardNinja from "./components/Games/KeyboardNinja/KeyboardNinja.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
            <Route path="/sign-up" exact component={Register} />
        </Switch>
        <Switch>
            <Route path="/sign-in" exact component={Login} />
        </Switch>
        <Switch>
            <Route path="/keyboard-typer-ninja" exact component={KeyboardNinja} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
