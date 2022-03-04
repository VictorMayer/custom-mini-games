import styled from "styled-components";
import GameMenu from "../../components/games/KeyboardNinja/GameMenu.js";
import PageFooter from '../../components/PageFooter.js';
import { useEffect } from "react";

export default function KeyboardNinja() {

    useEffect(() => {
        
    }, []);

    return (
        <Page>
            <p>Keyboard Typer Ninja</p>
            <GameContainer>
                <GameMenu/>
            </GameContainer>
            <PageFooter/>
        </Page>
    )
}

const GameContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
width: 750px;
height: 500px;
background: radial-gradient(#eee, #ccc);
border-radius: 15px;
padding: 50px;
`

const Page = styled.div`
margin-top: 20px;
font-family: 'Amatic SC', cursive;
font-weight: 700;
font-size: 34px;
width:1000px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p {
    cursor: default;
}
`