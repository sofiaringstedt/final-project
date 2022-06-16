import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const UserForm = (props) => {
  const {
    firstName,
    lastName,
    email,
    password,
    errorMessage,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    handleForm,
  } = props;

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const displayOnlyInRegistration = firstName !== undefined || lastName !== undefined;

  return (
    <InputContainer>
      <Form onSubmit={handleForm}>
        {errorMessage && <p>{errorMessage}</p>}
        {displayOnlyInRegistration && (
          <>
            <InputWrapper htmlFor="firstname">
              <StyledInputField
                type="text"
                id="firstname"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="Anna"
              ></StyledInputField>
            </InputWrapper>
            <InputWrapper htmlFor="lastname">
              <StyledInputField
                type="text"
                id="lastname"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Jönsson"
              ></StyledInputField>
            </InputWrapper>
          </>
        )}
        <InputWrapper htmlFor="email">
          <StyledInputField
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@yourdomain.something"
          ></StyledInputField>
        </InputWrapper>
        <InputWrapper htmlFor="password">
          <StyledInputField
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password!"
          ></StyledInputField>
        </InputWrapper>
        <StyledParagraph>
          I am a new user,{" "}
          <Link className="styledLink" to="/register">
            Create Account
          </Link>
        </StyledParagraph>
         <ButtonWrapper>
        <SubmitButton type="submit">
          {displayOnlyInRegistration ? "Register" : "Login"}
        </SubmitButton>
        </ButtonWrapper>
      </Form>
    </InputContainer>
  );
};

export default UserForm;

const StyledInputField = styled.input`
  height: 45px;
  width: 320px;
  border-radius: 10px;
  border: solid #aaaaaa 1px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 10px 40px 50px 30px;
`;

const InputWrapper = styled.label`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: #175C4C ;
  color: #FFFFFF;
  height:45px;
  width: 320px;
  border: none;
  border-radius: 30px;
  -webkit-box-shadow: 3px 7px 9px -2px rgba(0,0,0,0.84); 
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
