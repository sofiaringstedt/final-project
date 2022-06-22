import styled from "styled-components";
import { devices } from "./globalStyles";

const Inputs = styled.input`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Select = styled.select`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
`;

export const DateInput = styled(Inputs)`
`;

export const BatchInput = styled(Inputs)`
`;

export const Button = styled.button`
  font-family: 'Source Serif Pro';
  margin: 5px;
  background-color: lightblue;
  color: #175C4C;
  border: 1px solid #175C4C;
  padding: 5px;
  border-radius: 2px;
  font-weight: 700;

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
      background-color: #8ec2d1;
    }
  }
`;