import PageFooter from "../../components/PageFooter"
import { GameContainer, Page, TheMindContainer } from "../../components/_shared/containers"

export default function TheMind() {
    return (
        <Page>
            <p>The Mind</p>
            <GameContainer>
                <TheMindContainer>
                    
                </TheMindContainer>
            </GameContainer>
            <PageFooter/>
        </Page>
    )
}
