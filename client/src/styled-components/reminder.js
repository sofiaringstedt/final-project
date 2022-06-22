import styled from "styled-components";
import { devices } from "./globalStyles";

export const ReminderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Header = styled.h1`
  color: #175c4c;
`;

export const ReminderContainer = styled.div`
  margin-top: 80px;
  width: 80%;
  @media ${devices.tablet} {
    max-width: 50%;
  }
`;

export const NextDoseTag = styled.p`
  font-weight: 600;
  font-style: italic; 
`;