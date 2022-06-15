import React from "react";
import styled from "styled-components";

const Button = () =>{
    return (
        <ButtonWrapper>
        <RegisterButton> </RegisterButton>
        </ButtonWrapper>
    )
    
}
export default Button


const RegisterButton = styled.button`
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
