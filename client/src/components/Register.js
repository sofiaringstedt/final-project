import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { registerUser } from "../actions/userActions";
import UserForm from "../reusablecomponents/UserForm";

const Register = ({ mode, method }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // const handleFirstNameChange = (event) => setFirstName(event.target.value);
  // const handleLastNameChange = (event) => setLastName(event.target.value);
  // const handleEmailChange = (event) => setEmail(event.target.value);
  // const handlePasswordChange = (event) => setPassword(event.target.value);

  const onRegisterOrEditUser = (event) => {
    event.preventDefault();
    registerUser(
      firstName,
      lastName,
      email,
      password,
      mode,
      method,
      navigate,
      setErrorMessage
    );
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Create account</h1>
      <UserForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        errorMessage={errorMessage}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        handleForm={onRegisterOrEditUser}
      />
    </>
  );
  // <>
  //   <button onClick={() => navigate("/")}>Home</button>
  //   <h1>Create account</h1>
  //   <Form onSubmit={handleUserRegistration}>
  //     {errorMessage && <p>{errorMessage}</p>}
  //     <InputContainer>
  //       <label htmlFor="firstname"></label>
  //       <InputField
  //         type="text"
  //         id="firstname"
  //         value={firstName}
  //         onChange={handleFirstNameChange}
  //         placeholder="Anna"
  //       />
  //     </InputContainer>
  //     <InputContainer>
  //       <label htmlFor="lastname"></label>
  //       <InputField
  //         type="text"
  //         id="lastname"
  //         value={lastName}
  //         onChange={handleLastNameChange}
  //         placeholder="Jönsson"
  //       />
  //     </InputContainer>
  //     <InputContainer>
  //       <label htmlFor="email"></label>
  //       <InputField
  //         type="text"
  //         id="email"
  //         value={email}
  //         onChange={handleEmailChange}
  //         placeholder="email@yourdomain.something"
  //       />
  //     </InputContainer>
  //     <InputContainer>
  //       <label htmlFor="password"></label>
  //       <InputField
  //         type="password"
  //         id="password"
  //         value={password}
  //         onChange={handlePasswordChange}
  //         placeholder="Password!"
  //       />
  //     </InputContainer>
  //     <Button type="submit">Register</Button>
  //   </Form>
  // </>
};

export default Register;
