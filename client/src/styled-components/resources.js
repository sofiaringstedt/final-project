import styled from "styled-components";
import { devices } from "./globalStyles";

export const ResourcesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
`;

export const Header = styled.h1`
  color: #175C4C;
`;

export const ResourcesWrapper = styled.ul`
  margin-top: 80px;
  max-width: 80%;
  @media ${devices.tablet} {
    max-width: 50%;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const ProfileLinkTag = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  text-decoration: none;
  color: black;
  transform:scale(1, 1);
  transition: 1s;

  @media ${devices.desktop} {
    &:hover {
      cursor: pointer;
      transform:scale(1.05, 1.05);
    }
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
  color: black;

  @media ${devices.desktop} {
    &:hover {
      color: #cf1d44;
    }
  }
`;

export const BioPics = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
`;