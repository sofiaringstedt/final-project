import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import { loginUser } from "../actions/userActions";

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
  }, [accessToken, navigate])

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Log in</h1>
      <Form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password" />
        </div>
        <p>I am a new user, <Link to="/register">Create Account</Link></p>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: fit-content;
`;

export default Login;