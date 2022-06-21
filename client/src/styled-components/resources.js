import styled from "styled-components";

export const ResourcesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
`;

export const ResourcesWrapper = styled.ul`
  margin-top: 80px;
  max-width: 80%;
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProfileLinkTag = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  text-decoration: none;
`;

export const LinkTag = styled.a`
  text-decoration: none;
`;

export const BioPics = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
`;