import "./Register.css"

export default function Rrgister() {
  return (
    <div className="register">
         <span className="registerTitle">register</span>
      <form className="registerForm">
            <label>Username</label>
            <input type="text" placeholder="Your Username...." />
            <label>Email</label>
            <input type="text" placeholder="Your Email(abc@gmail.com)" />
            <label>Password</label>
            <input type="password" placeholder="Your password....."/>
            <button className="registerButton" >register</button>
      </form>
            <button className="registerloginButton" >Login</button>
    </div>
  )
}
