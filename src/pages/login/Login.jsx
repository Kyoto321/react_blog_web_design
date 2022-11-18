
import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label className="loginFormLabel">Email</label>
                <input className="loginFormInput" type="text" placeholder="Enter your email"></input>
                <label className="loginFormLabel">Password</label>
                <input className="loginFormInput" type="text" placeholder="Enter your password"></input>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
                <Link className="link" to="/register">Register</Link>
        </div>
    );
}