import axios from 'axios';
import { useRef } from 'react';
import './register.css'
import {useNavigate} from 'react-router-dom'

export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("password dont match");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post("/auth/register",user);
                history("/login");
            }catch(err){

            }
        }
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">Connect with people all around the world</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                        <input placeholder="Password" type="password" minLength="6" required ref={password} className="loginInput" />
                        <input placeholder="Password again" type="password" minLength="6" required ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type="submit">Signup</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
