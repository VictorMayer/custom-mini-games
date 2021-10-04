import styled from "styled-components";
import React from "react";
import randomWords from "random-words";
import $ from "jquery";

export default function Start() {

    const [nextWord, setNextWord] = React.useState(randomWords());
    const [word, setWord] = React.useState(randomWords());
    const [index, setIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [timer, setTimer] = React.useState(30);
    const [gameRunning, setGameRunning] = React.useState(false);
    const wordToArray = word.split("");

    React.useEffect(()=>{
        if(gameRunning){

        }
    }, [gameRunning]);

    function callNextWord() {
        setWord(nextWord);
        setNextWord(randomWords());
        $("span").removeClass("red");
        $("span").removeClass("green");
    }

    function start() {
        setGameRunning(true);
    }

    function checkEachChar(e) {
        console.log(e)
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

    return(
        <GameContainer autoFocus tabIndex={-1} onKeyDown={(e)=>checkEachChar(e.key)}>
            { !gameRunning ? <ClickMe onClick={start}>
                <p>Click Here To Start Typing</p>
            </ClickMe> : <></>}
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

const ClickMe = styled.div`
    position: absolute;
    background:#111;
    cursor:pointer;
    color:#bbb;
    width:400px;
    height:250px;
    margin-top: 130px;
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