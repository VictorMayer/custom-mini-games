import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: radial-gradient(#eee, #ccc);
border-radius: 15px;
font-weight:700;
font-size: 35px;
margin-top: 40px;
padding: 40px 50px;
form{
    text-align: start;
    display: flex;
    flex-direction: column;
    button{
        margin-top: 10px;
        align-self: center;
        background:none;
        border: none;
        outline: none;
        width:100px;
        height:60px;
        border-radius: 10px;
        font-family: 'Amatic SC', cursive;
        font-weight: 700;
        font-size: 32px;
        cursor: pointer;
        &:hover{
            font-size: 45px;
            background: linear-gradient(115deg, #fff47c, #f005df);
            transition: 500ms;
            width:155px;
        }
    }
    input{
        margin: 5px 0px 20px 0px;
        background:none;
        border: none;
        border-bottom: 1px solid #aaa;
        width: 300px;
        height: 40px;
        outline: none;
        font-family: 'Amatic SC', cursive;
        font-weight: 700;
        font-size: 28px;
        text-align: start;
        color: #333;
        &::placeholder{
            font-family: 'Amatic SC', cursive;
            font-weight: 400;
            font-size: 26px;
            text-align: start;
            color:#888;
        }
    }
}
`

const Page = styled.div`
    padding-top: 20px;
    width: 100vw;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        cursor: default;
    }
    .toggle-sign{
        padding-top: 20px;
        font-size: 32px;
        cursor: pointer;
        &:hover{
            font-size: 40px;
            transition: 500ms;
        }
    }
`

export {
    Container,
    Page,
};
