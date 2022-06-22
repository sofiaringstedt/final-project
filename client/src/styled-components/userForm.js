import styled from "styled-components";
import { devices } from "./globalStyles";

export const StyledInputField = styled.input`
  height: 45px;
  width: 320px;
  border-radius: 10px;
  border: solid #aaaaaa 1px;
   padding: 2px 5px 2px 7px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin: 10px 40px 50px 30px;
`;

export const InputWrapper = styled.label`
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #175C4C;
  color: #FFFFFF;
  height:45px;
  width: 320px;
  border: none;
  border-radius: 30px;
  -webkit-box-shadow: 3px 7px 9px -2px rgba(0,0,0,0.84); 
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
  font-size: 16px;

  @media ${devices.tablet}{
    font-size: 20px;
  }

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
      background-color: #094739;
      color: #ffffff;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
