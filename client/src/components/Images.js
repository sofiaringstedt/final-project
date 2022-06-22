import React from "react";

import NavigateBackButton from "reusables/NavigateBackButton";
import Header from "reusables/Header";
import removal from "../assets/removal.jpg";
import bite from "../assets/bite.jpg";

import {
  ImageContainer,
  ImageWrapper,
  TickImage,
  OrderedList,
  Paragraph,
  Title
} from "../styled-components/images";

const Images = () => {
  return (
    <>
      <Header />
      <NavigateBackButton />
      <Title>IMAGES</Title>
      <ImageContainer>
      <ImageWrapper>
        <h2>Tick Bites</h2>
        <div>
          <TickImage border src={bite} alt=" living tick on a hand" />
        </div>
        <Paragraph>Many who suffer from tick-borne infections have not
          even noticed that they have been bitten by a tick. Ticks that bite into the
          skin should be removed as soon as possible as infectious agents such as
          Lyme disease and anaplasma bacteria are transmitted after 1-2 days.
        </Paragraph>
      </ImageWrapper>
      <ImageWrapper>
        <h2>Tick Removal</h2>
        <div>
          <TickImage src={removal} alt=" living tick on a hand" />
        </div>
        <OrderedList>
          <li>Use a fine-tipped tweezer or a tick remover to remove the tick.</li>
          <li>Grasp the tick's mouthparts as close to the skin as possible.</li>
          <li>Gently pull straight out.</li>
        </OrderedList>
      </ImageWrapper>
      </ImageContainer>
    </>
  );
};

export default Images;