import { useState } from "react"
import styled from "styled-components"
import Leaderboards from './Leaderboards';

export default function PageFooter() {
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    function toggleLeaderboard() {
        setShowLeaderboard(!showLeaderboard);
    }

    return (
        <FooterContainer>
            <p onClick={toggleLeaderboard}>Leaderboards</p>
            <p>How to Play</p>

            {showLeaderboard ? <Leaderboards/> : <></> }
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    width: 700px;
    justify-content: space-between;
`