import { GameContainer, Page } from "../../shared/containers.js";
import GameMenu from "./GameMenu.js";

export default function KeyboardNinja() {
    return (
        <Page>
            <p>Keyboard Typer Ninja</p>
            <GameContainer>
                <GameMenu/>
            </GameContainer>
        </Page>
    )
}
