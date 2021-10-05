import styled from "styled-components";
import React, { useEffect } from "react";
import randomWords from "random-words";
import useInterval from "use-interval";
import $ from "jquery";

export default function Start(props) {

    const {goToMenu} = props;

    const [nextWord, setNextWord] = React.useState(randomWords());
    const [word, setWord] = React.useState(randomWords());
    const [index, setIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [timer, setTimer] = React.useState(30);
    const [gameRunning, setGameRunning] = React.useState(false);
    const [gameEnd, setGameEnd] = React.useState(false);
    const wordToArray = word.split("");

    useEffect(()=>{
        if(gameEnd){
            //axios... blablabla
        }
    }, [gameEnd]);

    useInterval(()=>{
        if(timer === 1){
            setTimer(timer-1)
            setGameEnd(true);
            setGameRunning(false);
        } else {
            setTimer(timer-1);
        }
    }, gameRunning ? 1000 : null);

    function callNextWord() {
        setWord(nextWord);
        setNextWord(randomWords());
        $("span").removeClass("red");
        $("span").removeClass("green");
    }
    
    function checkEachChar(e) {
        console.log(e)
        if(!gameRunning || gameEnd)return;
        let element = document.querySelector(".letra"+index);
        if(e === wordToArray[index]){
            console.log("acertou");
            setIndex(index+1);
            console.log(element);
            if(element.classList.contains("red")){
                element.classList.remove("red")
            }
            element.classList.add("green");
            setScore(score+1);
        } else{
            console.log("errou");
            element.classList.add("red");
            if(score > 0)setScore(score-1);
        }
        if(index === word.length-1 && element.classList.contains("green")) {
            callNextWord();
            setIndex(0);
        }
    }

    function replay() {
        setIndex(0);
        setScore(0);
        setTimer(30);
        setGameEnd(false);
        setGameRunning(false);
        callNextWord();
    }

    function backToMenu() {
        replay();
        goToMenu();
    }

    return(
        <GameContainer autoFocus tabIndex={-1} onKeyDown={(e)=>checkEachChar(e.key)}>
            { (!gameRunning && !gameEnd) ? <ClickMe onClick={()=>setGameRunning(true)}>
                <p>Click Here To Start Typing</p>
            </ClickMe> 
            : gameEnd ? 
            <EndGame>
                <p>Score: {score}</p>
                <button onClick={replay}>Play Again</button>
                <button onClick={backToMenu}>Main Menu</button>
            </EndGame> : <></> }
            <WordStyles>
                <p className="word">{wordToArray.map((letter, i)=>(
                    <Letter className={"letra"+i} key={i}>{letter}</Letter>
                ))}</p>
                <p className="next-word">{nextWord}</p>
            </WordStyles>
            <Score>
                <p><span>Score:</span>{score}</p>
            </Score>
            <Timer>
                <p><span>Timer:</span>{timer}<span>s</span></p>
            </Timer>
        </GameContainer>
    )
}

const EndGame = styled.div`
position: absolute;
width:100%;
height: 100%;
background: #111;
z-index:10;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color:#00D700;
font-size: 40px;
padding-top: 50px;
button{
    background: #00D700;
    border: none;
    border-radius: 3px;
    width: 150px;
    height: 30px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    margin-top: 20px;
    &:hover{
        color: lightgreen;
    }
}
`

const Letter = styled.span`
`
const GameContainer = styled.div`
    position: relative;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .green{
        color:#00D700;
    }
    .red{
        color:red;
    }
`

const WordStyles = styled.div`
    .word{
        color: #efe183;
        font-size: 40px;
        margin-top:70px;
    }
    .next-word{
        color:#fff;
        font-size:20px;
        margin-top:70px;
    }
`
const Timer = styled.div`
    position: absolute;
    top:10px;
    right:10px;
    color: #00D700;
    font-size: 22px;
    span{
        font-size: 14px;
    }
`
const Score = styled.div`
    position: absolute;
    top: 10px;
    left:10px;
    color:#00D700;
    font-size: 22px;
    span{
        font-size: 14px;
    }
`
const ClickMe = styled.div`
    position: absolute;
    background:#111;
    cursor:pointer;
    color:#bbb;
    width:400px;
    height:250px;
    margin-top: 130px;
`