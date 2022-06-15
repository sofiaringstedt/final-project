import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../reusablecomponents/Buttons";
import InputField from "../reusablecomponents/InputField";

import { loginUser } from "../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(email, password, navigate);
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
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <label htmlFor="email"></label>
          <InputField
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password"></label>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />
        </InputContainer>
        <StyledParagraph>
          I am a new user,{" "}
          <Link className="styledLink" to="/register">
            Create Account
          </Link>
        </StyledParagraph>
        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin-top: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledHeading = styled.h1`
  margin-left: 40px;
  font-weight: 600;
  font-size: 20px;
`;
const StyledParagraph = styled.p`
  margin: 10px 40px 50px 30px;
`;
 const InputContainer = styled.div`
  margin-bottom: 20px;
`;
const GoBackButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  margin-left: 35px;
`;

export default Login;
