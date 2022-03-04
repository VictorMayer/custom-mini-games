import styled from "styled-components";
import React from "react";
import { loginUser } from "../services/CustomMinigames";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = React.useState({ login: "", password:"" });
    const navigate = useNavigate();
    
    function submit(e) {
        e.preventDefault();
        loginUser(user)
            .then(answer => console.log(answer.data))
            .catch(answer => console.log(answer.response.data));
        return;
    }

    return(
        <Page>
        <p>Login</p>
        <Container>
            <form onSubmit={submit}>
                <label htmlFor="login">Email / Username:</label>
                <input required type="text" id="login" name="login" value={user.login} onChange={(e)=>setUser({...user, login: e.target.value})}></input>
                <label htmlFor="password">Password:</label>
                <input required type="password" id="password" name="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}></input>
                <button onClick={submit} type="submit">Login</button>
            </form>
        </Container>
        <p onClick={()=>navigate("/sign-up")}>Don't have an Account? Create yours now!</p>
        </Page>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: radial-gradient(#eee, #ccc);
border-radius: 15px;
min-height: 700px;
min-width:500px;
font-weight:700;
font-size: 35px;
margin-top: 40px;
padding-top: 20px;
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
    font-size: 60px;
    font-weight: 700;
    text-align: center;
`
