import { useRef } from 'react';
import './login.css'

export default function Login() {
    const email = useRef();
    const password = useRef();
    const handleClick = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">Connect with people all around the world</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" required ref={email} />
                        <input placeholder="Password" type="password" className="loginInput" required minLength="6" ref={password} />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">create new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
