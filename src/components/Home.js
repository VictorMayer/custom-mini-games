import styled from "styled-components";
import { useHistory } from "react-router";

export default function Home() {

    const history = useHistory();

    function goToGame(game) {
        console.log(game);
        switch (game) {
            case 1: history.push("/keyboard-typer-ninja");break;
            case 3: history.push("/the-mind");break;
            default: break;
        }
    }

    return (
        <HomeContainer>
            <Logo>
                Custom Mini-Games
            </Logo>
            <MenuContainer>
                <p className="game-opt" onClick={()=>goToGame(1)} >keyboard typer ninja</p>
                <p className="game-opt" onClick={()=>goToGame(2)} >Cursor Dodger</p>
                <p className="game-opt" onClick={()=>goToGame(3)} >The Mind</p>
                <p className="game-opt" onClick={()=>goToGame(4)} >Aimbot Trainer</p>
            </MenuContainer>
        </HomeContainer>
    )
}

const MenuContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: radial-gradient(#eee, #ccc);
border-radius: 15px;
min-height: 700px;
min-width:500px;
font-weight:700;
font-size: 30px;
.game-opt{
    text-align: center;
    padding: 2px 15px;
    width: 100%;
    cursor: default;
    &::selection{
    background-color:#F149C9;
    color:#fff;
    }
    &:hover{
    font-size: 40px;
    transition: 500ms;
    }
}
`

const Logo = styled.div`
margin-top: 25px;
margin-bottom:75px;
font-weight: 700;
font-size: 70px;
color:#111;
text-align: center;
&::selection{
    background-color:#f3aca9;
    color:#fff;
    }
&:hover{
    font-size: 85px;
    transition: 500ms;
    margin-bottom: 55.5px;
}
`

const HomeContainer = styled.div`
font-family: 'Amatic SC', cursive;
`