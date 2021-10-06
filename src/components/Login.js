import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router";

export default function Login() {

    const [user, setUser] = React.useState({username:"", email: "", password:""});
    const history = useHistory();
    
    function submit(e) {
        e.preventDefault();
        const body = {
            username: user.username,
            email: user.email,
            password: user.password
        }
        console.log(body);
        //axios e bla bla bla
    }

    return(
        <Page>
        <p>Login</p>
        <Container>
            <form onSubmit={submit}>
                <label htmlFor="user">Username / email:</label>
                <input type="text" id="user" name="user" placeholder="seu apelido ou seu e-mail" value={user.username} onChange={(e)=>setUser({...user, username: e.target.value, email: e.target.value})}></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="senha123" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}></input>
                <button onClick={submit} type="submit">Login</button>
            </form>
        </Container>
        <p onClick={()=>history.push("/sign-up")}>Don't have an Account? Create yours now!</p>
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
padding-top: 20px;
form{
    padding-top: 150px;
    text-align: start;
    display: flex;
    flex-direction: column;
    button{
        margin-top: 150px;
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
            color:#bbb;
        }
    }
}
`

const Page = styled.div`
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    p:first-child{
        margin-bottom: 40px;
        cursor: default;
        &:hover{
            margin-bottom: 28px;
            font-size: 70px;

        }
    }
    p:last-child{
        margin-top: 40px;
        font-size: 30px;
        cursor: pointer;
        &:hover{
            font-size: 33px;
            text-decoration: underline;
        }
    }
`