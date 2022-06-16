import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  0 % { transform: rotate(0deg) }
  100 % { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid darkorange;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin;
  animation-name: ${spinnerAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  margin: 50px auto 0 auto;
`;

export const Header = styled.div`
  background: #E2F5FA;
  padding: 10px;
`;

export const CountdownContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const CountdownWrapper = styled.div`
  margin-right: 20px;
  background: darkorange;
  padding: 10px;
`;

export const DoseContainer = styled.div`
  display: flex;
`;

export const DoseParagraph = styled.p`
  margin-right: 30px;
`;

export const HeaderTags = styled.div`
  display: flex;
`;

export const TagParagraph = styled.p`
  margin-right: 40px;
`;