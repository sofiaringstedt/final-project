import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { loginUser  } from "../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(email, password, navigate)
  }

  useEffect(() => {
    if (accessToken) {
      navigate("/account")
    } 
  },[accessToken, navigate])

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email" />
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;