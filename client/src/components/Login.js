import React, {useState} from "react";
import { useDispatch } from "react-redux";

import user from "../reducers/user";

import { API_URL } from "../utils/urls";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }
    fetch(API_URL("login"), options)
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
        dispatch(user.actions.setEmail(userData.email))
        dispatch(user.actions.setAccessToken(userData.accessToken))
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email"></label>
        <input
        type="text"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="email"/>
      </form>
      <form>
        <label htmlFor="password"></label>
        <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login