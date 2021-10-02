import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import KeyboardNinja from "./components/Games/KeyboardNinja/KeyboardNinja.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
            <Route path="/keyboard-typer-ninja" exact component={KeyboardNinja} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
