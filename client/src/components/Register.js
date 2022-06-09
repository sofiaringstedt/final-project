import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../utils/urls";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleUserRegistration = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        firstName, 
        lastName, 
        email, 
        password 
      })
    }

    fetch(API_URL("register"), options)
      .then((response) => response.json())
      .then((userData) => {
        if (userData.success) {
          localStorage.setItem("user", JSON.stringify({
            userId: userData.user.userId,
            firstName: userData.user.firstName,
            lastName: userData.user.lastName,
            email: userData.user.email,
            accessToken: userData.user.accessToken
          }));

          navigate("/account")
        } else {
          setErrorMessage(userData.response)
        }
      })
      .catch((error) => console.log(error))
  } 

  return (
    <form onSubmit={handleUserRegistration}>
      {errorMessage && <p>{errorMessage}</p>}
      <label htmlFor="firstname"></label>
      <input 
        type="text" 
        id="firstname"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="Anna" 
      />
      <label htmlFor="lastname"></label>
      <input 
        type="text" 
        id="lastname"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Jönsson" 
      />
      <label htmlFor="email"></label>
      <input 
        type="text" 
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email@yourdomain.something" 
      />
      <label htmlFor="password"></label>
      <input 
        type="password" 
        id="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password!"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;