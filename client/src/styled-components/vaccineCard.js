import styled from "styled-components";
import { devices } from "./globalStyles";

// @media ${ devices.tablet } {
//   margin - left: 248px;
//   margin - bottom: 27px;
//   font - weight: 600;
//   font - size: 33px;
// }
// @media ${ devices.desktop } {
//   margin - left: 353px;
// }

const userWrappers = styled.div`
  width: 320px;
  @media ${devices.mobile} { width: 375px; };
  @media ${devices.largeMobile} { width: 400px; };
  @media ${devices.smallTablet} { width: 450px; };
  @media ${devices.tablet} { width: 500px; };
  @media ${devices.desktop} { width: 600px; };
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E2F5FA;

  padding: ${props => props.addTop ? "10px" : "20px 10px" };
`;

export const CountdownTitle = styled.h1`
  color: #175C4C;
`;

export const CountdownContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction : column;
  align-items: center;
  margin-right: 20px;
  background: darkorange;
  opacity: 0.9;
  border-radius: 10px;
  padding: 10px;
  width: 45px;

  :last-of-type {
    margin-right: 0;
  }
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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const CardHeader = styled.h2`
  font-size: 19px;
  margin: 40px 0 60px 0;
`;

export const UserDetailsContainer = styled(userWrappers)`
  display: flex;
  margin-bottom: 15px;
`;

export const UserDetailsWrapper = styled(userWrappers)`
 
`;

export const UserName = styled.p`
  margin: 0 0 -5px 7px;
  font-weight: 600;

   &:first-letter {
    text-transform: uppercase;
  }
`;

export const NameLabel = styled.p`
  margin: -5px 0 30px 7px;
  font-size: 14px;
`;

export const Table = styled.table`
  width: 320px;
  border-collapse: collapse;
  background-color: #fafafa;

  @media ${devices.mobile} { width: 375px; };
  @media ${devices.largeMobile} { width: 400px; };
  @media ${devices.smallTablet} { width: 450px; };
  @media ${devices.tablet} { width: 500px; };
  @media ${devices.desktop} { width: 600px; };
`;

export const Label = styled.tr`
  border-top: 2px solid #1c1c1c;
  border-bottom: 2px solid #1c1c1c;
`;

export const IconWrapper = styled.th`
   @media ${devices.largeMobile} {
    position: absolute;
    margin: 10px 0 0 18px;
  }
`;

export const TrashIcon = styled.img`
  width: 20px;
`;

export const TableHeader = styled.th`
  border-right: 1px solid black;
  padding: 12px 0;

  @media (max-width: 500px) {
    display: ${props => props.hide ? "none" : null};
  };
`;

export const DoseContainer = styled.tr`
  border-top: 2px solid #1c1c1c;
  border-bottom: 2px solid #1c1c1c;
`;

export const DeleteButton = styled.th`
  background: none;
  border: none;
  font-weight: 800;
`;
