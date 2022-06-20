import styled from "styled-components";

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
  @media (min-width: 768px) {
    margin: 40px 0 40px 0;
  }
`;

export const IconsContainer = styled.ul`
  width: 80%;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    width: 70%
  }
  @media (min-width: 1024px) {
    width: 100%;
    margin: 50px 0 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
  }
`;

export const HomeIcon = styled.li`
  margin: 20px 0px 20px 0px;
  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
  }
  @media (min-width: 1024px) {
    grid-column-start: 2;
  }
`;

export const ReminderIcon = styled.li`
  margin: 20px 0px 20px 0px;
  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
  }
  @media (min-width: 1024px) {
    grid-column-start: 3;
  }
`;

export const VaccineIcon = styled.li`
  margin: 20px 0px 20px 0px;
  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
  }
  @media (min-width: 1024px) {
    grid-column-start: 2;
    grid-row-start: 2;
  }
`;

export const EditIcon = styled.li`
  margin: 20px 0px 20px 0px;
  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
  }
  @media (min-width: 1024px) {
    grid-column-start: 3;
    grid-row-start: 2;
  }
`;

export const SignOutIcon = styled.li`
  margin: 20px 0px 20px 0px;
  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
  }
  @media (min-width: 1024px) {
    grid-column-start: 4;
    grid-row-start: 3;
  }
`;