import React from "react";
import styled from "styled-components";

const InputField = () =>{

    return(
        <InputWrapper>
        <StyledInputField></StyledInputField>
        </InputWrapper>
    )
}
export default InputField

const StyledInputField = styled.input`
    height: 45px ;
    width: 320px;
    border-radius: 10px;
    border: solid #aaaaaa 1px;
`
const InputWrapper = styled.div`
display: flex;
justify-content: center;
`