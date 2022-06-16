import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  0 % { transform: rotate(0deg) }
  100 % { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #175C4C;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin;
  animation-name: ${spinnerAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  margin: 50px auto 0 auto;
`;