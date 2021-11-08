import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">Connect with people all around the world</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">create new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
