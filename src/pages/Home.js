import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import { getGames } from "../services/CustomMinigames";

export default function Home() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames()
            .then(answer => {
                console.log(answer.data);
                setGames(answer.data);
            })
            .catch(answer => {
                console.log(answer.response);
            });
    }, []);

    return (
        <HomeContainer>
            <Logo>
                Custom Mini-Games
            </Logo>
            <MenuContainer>
                <p className="game-opt" onClick={()=>navigate("/games/1")} >keyboard typer ninja</p>
                <p className="game-opt" onClick={()=>navigate('x')} >Cursor Dodger</p>
                <p className="game-opt" onClick={()=>navigate('x')} >Aimbot Trainer</p>
                {games.map((g, i) => (
                    <p className="game-opt" key={i} onClick={() => navigate(g.id)}>{g.name}</p>
                ))}
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
cursor: default;
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