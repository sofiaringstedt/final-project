import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import user from "../reducers/user";

import { API_URL } from "../utils/urls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

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
        console.log(userData)
        dispatch(user.actions.setUserId(userData.userId))
        dispatch(user.actions.setFirstName(userData.firstName))
        dispatch(user.actions.setLastName(userData.lastName))
        dispatch(user.actions.setEmail(userData.email))
        dispatch(user.actions.setAccessToken(userData.accessToken))

        navigate("/account")
      })
      .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="email" />
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="password"/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;