import React from "react";
import UserContext from "../contexts/UserContext";
import { Container, Page } from "../components/_shared/formStyles";
import { loginUser } from "../services/CustomMinigames";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = React.useState({ login: "", password:"" });
    const { setUserInfo } = React.useContext(UserContext);
    const navigate = useNavigate();
    
    function submit(e) {
        e.preventDefault();
        loginUser(user)
            .then(answer => {
                console.log(answer.data);
                setUserInfo({ token: answer.data });
            })
            .catch(answer => console.log(answer.response.data));
        return;
    }

    return(
        <Page>
        <p>Login</p>
        <Container>
            <form onSubmit={submit}>
                <label htmlFor="login">Email / Username:</label>
                <input required placeholder="user / user@email.com" type="text" id="login" name="login" value={user.login} onChange={(e)=>setUser({...user, login: e.target.value})}></input>
                <label htmlFor="password">Password:</label>
                <input required placeholder="123 looks safe enough" type="password" id="password" name="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}></input>
                <button type="submit">Login</button>
            </form>
        </Container>
        <p className="toggle-sign" onClick={()=>navigate("/sign-up")}>Don't have an Account? Create yours now!</p>
        </Page>
    )
}
