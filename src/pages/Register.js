import { Container, Page } from "../components/_shared/formStyles";
import React from "react";
import { newUser } from "../services/CustomMinigames";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = React.useState({name: "", username:"", email: "", password:"", avatar:""});
    const navigate = useNavigate();
    
    function submit(e) {
        e.preventDefault();
        newUser(user)
            .then(loginSuccess)
            .catch(answer => console.log(answer.response.data));
        return;
    }

    function loginSuccess() {
        alert("Cadastro Concluído com Sucesso!");
        navigate("/sign-in");
    }

    return(
        <Page>
        <p>Register</p>
        <Container>
            <form onSubmit={submit}>
                <label htmlFor="name">Name:</label>
                <input required type="text" id="name" name="name" placeholder="exemplo: Maria Josefino" value={user.name} onChange={(e)=>setUser({...user, name: e.target.value})}></input>
                <label htmlFor="user">Username:</label>
                <input required type="text" id="user" name="user" placeholder="seu apelido" value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})}></input>
                <label htmlFor="email">Email:</label>
                <input required type="email" id="email" name="email" placeholder="maria.josefino@email.com" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})}></input>
                <label htmlFor="password">Password:</label>
                <input required type="password" id="password" name="password" placeholder="senha123" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}></input>
                <label htmlFor="avatar">Avatar:* </label>
                <input type="url" id="avatar" name="avatar" placeholder="URL: optional" value={user.avatar} onChange={(e)=>setUser({...user, avatar: e.target.value})}></input>
                <button type="submit">Register</button>
            </form>
        </Container>
        <p className="toggle-sign" onClick={() => navigate("/sign-in")}>Already have an account? Click here to Login</p>
        </Page>
    )
}
