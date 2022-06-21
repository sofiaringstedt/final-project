import styled from "styled-components";

export const HeaderWrapper = styled.div`
position: absolute;
top: 4vh;
left: 6vw;
`;
export const InformationContainer = styled.div`
width: 100%;
`;
export const InformationWrapper = styled.div`
/* width: 80%; */
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
margin-left: 15vw;
margin-right: 15vw;
margin-top: 18vh;
margin-bottom: 20vh;
`;
export const InfoHeadingOne = styled.h1`
/* font-size: 3rem; */
color: #175C4C;
font-size: 42px;
`;
export const InfoHeadingTwo = styled.h2`
/* font-size: 1.5rem; */
color: #175C4C;
font-size:25px;
`;
export const InfoHeadingThree = styled.h3`
/* font-size: 1.25rem; */
font-weight: 600;
font-size: 20px;
`;
export const InfoHeadingFour = styled.h4`
    font-weight: 300;
    /* font-size: 25px; */
    /* font-size: 1.375rem; */
    font-size: 22px;
`;
export const InfoParagraph = styled.p`
    font-weight: 300;
    /* font-size: 1rem; */
    font-size: 20px;
    line-height: 27px;
    line-break: loose;
`;
export const NumberedList = styled.ol`
list-style-type: decimal;
`;
export const BulletList = styled.ul`
list-style-type: circle;

`;
export const ListItem = styled.li`
    font-size: 18px;
    font-weight: 400;
    margin-left: 4vw;
    margin-right: 7vw;
`;