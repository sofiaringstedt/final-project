import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../utils/urls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const handleLogin = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    };

    fetch(API_URL("login"), options)
      .then((response) => response.json())
      .then((userData) => {
        if (userData.success) {
          console.log(userData)
          localStorage.setItem("user", JSON.stringify({
            userId: userData.userId,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            accessToken: userData.accessToken
          }));
          navigate("/account")     
        } else {
          navigate("/register")
        }
      })
      .catch((error) => console.log(error))
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