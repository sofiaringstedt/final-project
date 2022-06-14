import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { registerUser } from "../actions/userActions";

const Register = ({ mode, method }) => {
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
    registerUser(firstName, lastName, email, password, mode, method, navigate, setErrorMessage,)
  }

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Create account</h1>
      <Form onSubmit={handleUserRegistration}>
        {errorMessage && <p>{errorMessage}</p>}
        <div>
          <label htmlFor="firstname"></label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Anna"
          />
        </div>
        <div>
          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Jönsson"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@yourdomain.something"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password!"
          />
        </div>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default Register;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: fit-content;
`;