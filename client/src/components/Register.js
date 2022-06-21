import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerOrEditUser } from "../actions/userActions";

import UserForm from "../reusables/UserForm";
import HomeButton from "reusables/HomeButton";
import {FormContainer, StyledHeading} from "../styled-components/login"

import { Spinner } from "../styled-components/globalStyles";

const Register = ({ mode, method }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onRegisterOrEditUser = (event) => {
    event.preventDefault();
    registerOrEditUser(firstName, lastName, email, password, mode, method, setLoading, setErrorMessage, navigate)
  };

  if (loading) {
    return <Spinner></Spinner>
  };

  return (
    <>
    <FormContainer>
      <HomeButton />
      <StyledHeading>Create account</StyledHeading>
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
      </FormContainer>
    </>
  );
};

export default Register;
