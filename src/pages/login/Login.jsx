import "./Login.css"
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="Your Email (abc@gmail.com)" />
            <label>Password</label>
            <input type="password" placeholder="Your password....."/>
            <button className="loginButton" >LogIn</button>
      </form>
            <button className="loginRegisterButton" >
            <Link to="/Register" className="Link">REGISTER</Link>
            </button>
    </div>
  )
}
