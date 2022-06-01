import React, { useState } from "react";
import { useDispatch } from "react-redux";

import user from "../reducers/user";

import { API_URL } from "../utils/urls";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitUserData = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        password: password 
      })
    }

    fetch(API_URL("register"), options)
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
        dispatch(user.actions.setUserId(userData.userId))
        dispatch(user.actions.setFirstName(userData.firstName))
        dispatch(user.actions.setLastName(userData.lastName))
        dispatch(user.actions.setEmail(userData.email))
        dispatch(user.actions.setAccessToken(userData.accessToken))
      })
      .catch((error) => console.log(error))
  } 

  // const navigate = useNavigate();
  // const accessToken = useSelector((store) => store.user.accessToken);
  return (
    <form onSubmit={submitUserData}>
      <label htmlFor="firstname"></label>
      <input 
        type="text" 
        id="firstname"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="Anna" 
      />
      <label htmlFor="lastname"></label>
      <input 
        type="text" 
        id="lastname"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Jönsson" 
      />
      <label htmlFor="email"></label>
      <input 
        type="text" 
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="email@yourdomain.something" 
      />
      <label htmlFor="password"></label>
      <input 
        type="password" 
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password!"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;