import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserForm from "../reusablecomponents/UserForm";

import { loginUser } from "../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(email, password, setLoading, setErrorMessage, navigate);
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/account");
    }
  }, [accessToken, navigate]);

  return (
    <FormContainer>
      <GoBackButton onClick={() => navigate("/")}>X</GoBackButton>
      <StyledHeading>Log in</StyledHeading>
      <UserForm
        email={email}
        password={password}
        errorMessage={errorMessage}
        setEmail={setEmail}
        setPassword={setPassword}
        handleForm={handleLogin}
      />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin-top: 50px;
`;

const StyledHeading = styled.h1`
  margin-left: 40px;
  font-weight: 600;
  font-size: 20px;
`;

const GoBackButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  margin-left: 35px;
`;

export default Login;
