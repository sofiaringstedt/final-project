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
    editAccount
  } = props;

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const firstNameFromLocalStorage = JSON.parse(localStorage.getItem("user"))?.firstName;
  const lastNameFromLocalStorage = JSON.parse(localStorage.getItem("user"))?.lastName;
  const emailFromLocalStorage = JSON.parse(localStorage.getItem("user"))?.email;

  const displayOnlyInRegistration = firstName !== undefined || lastName !== undefined;

  return (
    <InputContainer>
      <Form onSubmit={handleForm}>
        {displayOnlyInRegistration && (
          <>
            <InputWrapper htmlFor="firstname">
              <StyledInputField
                type="text"
                id="firstname"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder={firstNameFromLocalStorage ? firstNameFromLocalStorage : "Anna"}
              ></StyledInputField>
            </InputWrapper>
            <InputWrapper htmlFor="lastname">
              <StyledInputField
                type="text"
                id="lastname"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder={lastNameFromLocalStorage ? lastNameFromLocalStorage : "Jönsson"}
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
            placeholder={emailFromLocalStorage ? emailFromLocalStorage : "email@yourdomain.something"}
          ></StyledInputField>
        </InputWrapper>
        <InputWrapper htmlFor="password">
          <StyledInputField
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
          ></StyledInputField>
        </InputWrapper>
        {errorMessage && <p>{errorMessage}</p>}
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
            {editAccount ? "Edit" : displayOnlyInRegistration ? "Register" : "Login" }
        </SubmitButton>
        </ButtonWrapper>
      </Form>
    </InputContainer>
  );
};

export default UserForm;