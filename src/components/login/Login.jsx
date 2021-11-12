import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);



    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    };

    console.log(user);
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
                        <input placeholder="Password" type="password" className="loginInput" required minLength="3" ref={password} />
                        <button className="loginButton">{isFetching ? <AutorenewIcon/> : "login"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">create new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
