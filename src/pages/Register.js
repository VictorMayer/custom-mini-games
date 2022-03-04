import styled from "styled-components";
import React from "react";
import { newUser } from "../services/CustomMinigames";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = React.useState({name: "", username:"", email: "", password:"", avatar:""});
    const navigate = useNavigate();
    
    function submit(e) {
        e.preventDefault();
        newUser(user)
            .then(answer => {})
            .catch(answer => console.log(answer.response.data));
        return;
    }

    return(
        <Page>
        <p>Register</p>
        <Container>
            <form onSubmit={submit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="exemplo: Maria Josefino" value={user.name} onChange={(e)=>setUser({...user, name: e.target.value})}></input>
                <label htmlFor="user">Username:</label>
                <input type="text" id="user" name="user" placeholder="seu apelido" value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})}></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria.josefino@email.com" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})}></input>
                <label htmlFor="password">Password:</label>
                <input required type="password" id="password" name="password" placeholder="senha123" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}></input>
                <label htmlFor="avatar">Avatar:* </label>
                <input type="url" id="avatar" name="avatar" placeholder="URL: optional" value={user.avatar} onChange={(e)=>setUser({...user, avatar: e.target.value})}></input>
                <button onClick={submit} type="submit">Register</button>
            </form>
        </Container>
        <p onClick={() => navigate("/sign-in")}>Already have an account? Click here to Login</p>
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