
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label className="registerFormLabel">Username</label>
                <input className="registerFormInput" type="text" placeholder="Enter your username"></input>
                <label className="registerFormLabel">Email</label>
                <input className="registerFormInput" type="text" placeholder="Enter your email"></input>
                <label className="registerFormLabel">Password</label>
                <input className="registerFormInput" type="text" placeholder="Enter your password"></input>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
                <Link className="link" to="/login">Login</Link>
        </div>
    );
}