import React, { useState, useContext } from "react";
import "../assests/css/login.css";
import axios from "axios";
import { URLContext } from "../URLContext";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { url } = useContext(URLContext);

    const handleShowPassword = (e) => {
        e.preventDefault();
        const password = document.getElementById("password");
        if (password.type === "password") {
            password.type = "text";
            e.target.innerHTML = "Hide";
        } else if (password.type === "text") {
            password.type = "password";
            e.target.innerHTML = "Show";
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}login/`, { email: email, password: password });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="loginpage">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id enim, ea magnam neque inventore.</p>
                <br />
                <label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span>Email</span>
                </label>
                <label>
                    <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span>Password</span>
                    <button onClick={handleShowPassword}>Show</button>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;