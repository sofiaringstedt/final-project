import React from "react";

import { Link } from "react-router-dom";

import {
  StyledInputField,
  InputContainer,
  Form,
  StyledParagraph,
  InputWrapper,
  SubmitButton,
  ButtonWrapper
} from "../styled-components/userForm";

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
        {!displayOnlyInRegistration && 
          <StyledParagraph>
            I am a new user,{" "}
            <Link className="styledLink" to="/register">
              Create Account
            </Link>
          </StyledParagraph>
        }
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