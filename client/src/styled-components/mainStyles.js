import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  
  to {
    transform: rotate(360deg); 
  }
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #175C4C;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
  margin: 50px auto 0 auto;
`;
