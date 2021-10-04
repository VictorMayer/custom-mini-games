import styled from "styled-components";
import React from "react";

import Setup from "./Setup.js";
import Start from "./Start.js";

export default function GameMenu() {

    const [menu, setMenu] = React.useState(true);
    const [setup, setSetup] = React.useState(false);
    const [start, setStart] = React.useState(false);

    return (
        <Container>
            { menu ?
            <div className="menu">
                <p onClick={()=>{setStart(true);setMenu(false)}}>START GAME</p>
                <p onClick={()=>{setSetup(true);setMenu(false)}}>SETUP</p>
            </div>
            : setup ? <Setup/> : <Start/> }
        </Container>
    )
}

const Container = styled.div`
    background: #111;
    width:100%;
    height:100%;
    font-family: 'Orbitron', sans-serif;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .menu{
        width: 100%;
        font-weight: 700;
        font-size: 20px;
        color: #00D700;
        & p {
            cursor: default;
            &:hover{
                font-size: 22px;
            }
        }
    }
`