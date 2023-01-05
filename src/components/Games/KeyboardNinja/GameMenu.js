import React from "react";

import Setup from "./Setup.js";
import Start from "./Start.js";
import { KeyboardNinjaContainer } from "../../shared/containers.js";

export default function GameMenu() {

    const [menu, setMenu] = React.useState(true);
    const [setup, setSetup] = React.useState(false);
    const [start, setStart] = React.useState(false);

    function goToMenu(){
        setSetup(false);
        setStart(false);
        setMenu(true);
    }

    return (
        <KeyboardNinjaContainer>
            { menu ?
            <div className="menu">
                <p onClick={()=>{setStart(true);setMenu(false)}}>START GAME</p>
                <p onClick={()=>{setSetup(true);setMenu(false)}}>SETUP</p>
            </div>
            : setup ? <Setup/> : <Start goToMenu={goToMenu}/> }
        </KeyboardNinjaContainer>
    )
}
