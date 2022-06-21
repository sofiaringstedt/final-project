import React from "react";
import Header from "reusables/Header";
import NavigateBackButton from "reusables/NavigateBackButton";

import {
  HeaderWrapper,
  InformationContainer,
  InformationWrapper,
  InfoHeadingOne,
  InfoHeadingTwo,
  InfoHeadingThree,
  InfoHeadingFour,
  InfoParagraph,
  ListItem
} from "../styled-components/information";


const Information = () => {
  return (
    <>
    <InformationContainer>
      <HeaderWrapper>
    <Header/>
    </HeaderWrapper>
    <NavigateBackButton />
    <InformationWrapper>
      <InfoHeadingOne>Bitten by a tick</InfoHeadingOne>
      <InfoHeadingFour>
        Ticks are small insects that bite into the skin and suck blood. Remove
        any ticks that you find on your skin. Ticks can sometimes spread
        diseases. If you are bitten, you may need to seek medical care.
      </InfoHeadingFour>
      <InfoHeadingThree >Ticks are found in nature</InfoHeadingThree >
      <InfoParagraph>
        Ticks are small insects that are found in nature between March and
        October. High grass is one example of where you might find ticks. Ticks
        suck blood from people and animals. A tick looks like a small spider and
        is 1–4 millimetres long. A tick may grow bigger in size once it has
        sucked blood.
      </InfoParagraph>
      <InfoHeadingThree >Ticks can spread diseases</InfoHeadingThree >
      <InfoParagraph>
        Ticks are not dangerous, but they can spread diseases. One of these
        diseases is TBE, tick-borne encephalitis, which can cause inflammation,
        swelling, of the brain. Another disease is called Lyme disease, and this
        can affect the skin, joints, and nerves. You can get vaccinated against
        TBE, but not against Lyme disease.
        There is a greater risk of infection if the tick stays attached to the
        skin for a long time. You should therefore remove the tick as quickly as
        possible.
      </InfoParagraph>
      <InfoHeadingTwo>How do I remove a tick?</InfoHeadingTwo>
      <ol>
        <ListItem>
          1. Use tweezers to remove ticks. Pharmacies offer different kinds that
          you can buy.
        </ListItem>
        <ListItem>
          2. Grasp the tick as close to the skin as possible. Gently pull it
          straight out. Try to get all of the tick out.
        </ListItem>
        <ListItem>
          3. Wash the area where the tick was attached with soap and water.
        </ListItem>
      </ol>
      <InfoParagraph>
        If any parts of the tick remain, you can try to remove them. Otherwise,
        they usually disappear on their own. The skin may get a little red and
        swollen around the bite for a few days, but then heal.
      </InfoParagraph>
      <InfoHeadingTwo>When should I seek medical care?</InfoHeadingTwo>
      <InfoParagraph>
        Most people who are bitten by a tick do not need medical care. Contact a
        healthcare centre if a week has passed and any of the following has
        happened:
      </InfoParagraph>
      <ol>
        <ListItem>
          There is a red spot in the area where the tick was attached, and this
          spot is larger than a couple of centimetres. The spot can be
          completely red or look like a ring, and it may be lighter in the
          centre.
        </ListItem>
        <ListItem>
          You have a fever, headaches, aches in your body, and you are more
          tired than usual.
        </ListItem>
      </ol>
      <InfoParagraph>
        Some clinics are open in the evenings and on weekends. Call the 1177
        hotline if you would like advice about what to do. The hotline is
        staffed by nurses. T hey can help you with information on where to seek
        care, if necessary.
      </InfoParagraph>
      <InfoHeadingTwo>Tips for not getting bitten by a tick</InfoHeadingTwo>
      <ol>
        <ListItem>
          Wear a long-sleeved shirt, long trousers, and high shoes or boots
          whenever you are out in nature.
        </ListItem>
        <ListItem>Check your body for ticks after you have been out in nature.</ListItem>
        <ListItem>Check your skin when you get undressed or shower/take a bath.</ListItem>
        <ListItem>Check your children's skin after they have been out in nature.</ListItem>
        <ListItem>Check your dogs, cats or any other animals in the household</ListItem>
      </ol>

      <InfoHeadingTwo>Vaccination against TBE</InfoHeadingTwo>
      <InfoParagraph>
        There is a particular risk of ticks spreading the disease TBE in certain
        areas, such as:
      </InfoParagraph>
      <ol>
        <ListItem>Uppland</ListItem>
        <ListItem>Stockholm County, near the sea</ListItem>
        <ListItem>Södermanland</ListItem>
        <ListItem>Västra Götaland County</ListItem>
      </ol>
      <InfoParagraph>
        There are also other areas where the risk of infection is greater. Call
        the 1177 hotline if you are not sure about whether there is a greater
        risk in your area. Get vaccinated if you plan to be out in nature in an
        area where there is a greater risk of infection. You need to get
        vaccinated two months beforehand in order to be completely protected
        against TBE. Contact a healthcare centre or clinic to get vaccinated.
      </InfoParagraph>
      </InformationWrapper>
      </InformationContainer>
    </>
  );
};
export default Information;
