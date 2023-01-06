import GameMenu from "../../components/Games/KeyboardNinja/GameMenu.js";
import PageFooter from '../../components/PageFooter.js';
import { useEffect } from "react";
import { GameContainer, Page } from "../../components/_shared/containers.js";

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
