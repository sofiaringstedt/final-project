import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../actions/userActions";
import UserForm from "../reusablecomponents/UserForm";

const Register = ({ mode, method }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

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
};

export default Register;
