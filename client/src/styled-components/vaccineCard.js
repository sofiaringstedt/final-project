import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #E2F5FA;
`;

export const CountdownContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background: darkorange;
  opacity: 0.9;
  border-radius: 10px;
  padding: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightyellow;
  padding-bottom: 20px;
`;

export const CardGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 1fr 1fr;
  width: 80%;
`;

export const HeaderTags = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`;

export const DoseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`;

export const CountdownTitle = styled.h1`
  color: #175C4C;
`;

export const Time = styled.p`
  font-size: 32px;
  color: white;
  margin: 0;
`;

export const Interval = styled.p`
  margin-bottom: 0;
  color: white;
`;

export const DoseHeader = styled.p`
  grid-column: 1;
  font-size: 16px;
  text-decoration: underline;
`;

export const DoseParagraph = styled.p`
  grid-column: 1;
  grid-row: 2;
  font-size: 16px;
`;

export const DateHeader = styled.p`
  grid-column: 2;
  font-size: 16px;
  text-decoration: underline;
`;

export const DateParagraph = styled.p`
  grid-column: 2;
  grid-row: 2;
  font-size: 16px;
`;

export const NextDoseHeader = styled.p`
  grid-column: 3;
  font-size: 16px;
  text-decoration: underline;
`;

export const NextDoseParagraph = styled.p`
  grid-column: 3;
  grid-row: 2;
  font-size: 16px;
`;

export const BatchHeader = styled.p`
  grid-column: 4;
  font-size: 16px;
  text-decoration: underline;
`;

export const BatchParagraph = styled.p`
  grid-column: 4;
  grid-row: 2;
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: -15px;
  bottom: 18px;
  background: none;
  border: none;
  font-weight: 800;
`;
