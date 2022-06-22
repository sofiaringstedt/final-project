import styled from "styled-components";
import { devices } from "./globalStyles";

const AnimateIcons = styled.li`
  transform:scale(1, 1);
  transition: 1s;
  margin: 20px 0px;

  @media ${devices.tablet} {
    margin: 40px 0px;
  };

  @media ${devices.desktop} {
    &:hover {
      cursor: pointer;
      transform:scale(1.05, 1.05);
    }
  }
`;

export const CapitalizeName = styled.span`
  text-transform: capitalize;
`;

export const AccountWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 80px 0 50px 0;
`;

export const Iconimages = styled.img`
  margin-right: 10px;
  vertical-align: bottom;
`;

export const LogoImage = styled.img`
  @media ${devices.tablet}  {
    margin: 40px 0 40px 0;
  };
`;

export const CapitalizeFullName = styled.p`
  text-transform: capitalize;
`;

export const IconsContainer = styled.ul`
  width: 80%;
  padding-bottom: 100px;

  @media ${devices.tablet} {
    width: 70%
  };

  @media ${devices.desktop} {
    width: 100%;
    margin: 50px 0 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
  };
`;

export const HomeIcon = styled(AnimateIcons)`
  @media ${devices.desktop} {
    grid-column: 2;
  };
`;

export const ReminderIcon = styled(AnimateIcons)`
  @media ${devices.desktop} {
    grid-column: 3;
  };
`;

export const VaccineIcon = styled(AnimateIcons)`
  @media ${devices.desktop} {
    grid-column: 2;
    grid-row: 2;
  };
`;

export const EditIcon = styled(AnimateIcons)`
  @media ${devices.desktop} {
    grid-column: 3;
    grid-row: 2;
  };
`;

export const SignOutIcon = styled(AnimateIcons)`
  @media ${devices.desktop} {
    grid-column: 4;
    grid-row: 3;
  }
`;