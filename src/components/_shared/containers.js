import styled from "styled-components";

const GameContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
width: 750px;
height: 500px;
background: radial-gradient(#eee, #ccc);
border-radius: 15px;
padding: 40px;
`;

const KeyboardNinjaContainer = styled.div`
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
`;

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
`;

const TheMindContainer = styled.div`
background: #bbb;
width:100%;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export {
    KeyboardNinjaContainer,
    TheMindContainer,
    GameContainer,
    Page,
}