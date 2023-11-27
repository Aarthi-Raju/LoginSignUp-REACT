import React, { useState } from "react";
import './LoginSignup.css'
import profile_png from '../Assets/profile_png.png'
import password_png from '../Assets/password_png.png'
import email_png from '../Assets/mail_png.png'

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up")
    return (
        <div className="main">
            <div className="pageName">
                <div className="action">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" ? <div className="input">
                    <img src={profile_png} alt="" />
                    <input type="text" placeholder="Name" />
                </div> : <div></div>}
                <div className="input">
                    <img src={email_png} alt="" />
                    <input type="email" placeholder="Email id" />
                </div>
                <div className="input">
                    <img src={password_png} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                {action === "Sign Up" ? <div></div> : <div className="lost">Lost password? <span>Click here!</span></div>}
            </div>
            <div className="buttons">
                <button className={action === "Sign Up" ? "submit blue" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</button>
                <button className={action === "Login" ? "submit blue" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
            </div>
        </div>
    )
}

export default LoginSignup