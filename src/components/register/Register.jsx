import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">Connect with people all around the world</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password again" className="loginInput" />
                        <button className="loginButton">Signup</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
