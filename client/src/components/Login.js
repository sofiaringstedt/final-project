import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserForm from "../reusables/UserForm";
import HomeButton from "reusables/HomeButton";

import { loginUser } from "../actions/userActions";

import { Spinner } from "../styled-components/mainStyles";
import { FormContainer, StyledHeading } from "../styled-components/login";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const onUserLogin = (event) => {
    event.preventDefault();
    loginUser(email, password, setLoggedIn, setLoading, setErrorMessage, navigate);
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/account");
    }
  }, [accessToken, navigate]);

  if (loading) {
    return <Spinner></Spinner>
  };

  return (
    <FormContainer>
      <HomeButton />
      <StyledHeading>Log in</StyledHeading>
      <UserForm
        email={email}
        password={password}
        errorMessage={errorMessage}
        setEmail={setEmail}
        setPassword={setPassword}
        handleForm={onUserLogin}
      />
    </FormContainer>
  );
};

export default Login;
