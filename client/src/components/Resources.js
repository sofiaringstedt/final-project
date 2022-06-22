import React from "react";
import NavigateBackButton from "reusables/NavigateBackButton";

import SH from "../assets/SH.png";
import SR from "../assets/SR.png";
import FA from "../assets/FA.jpeg";

import { 
  ResourcesContainer,
  Header, 
  LinkWrapper, 
  ResourcesWrapper, 
  ProfileLinkTag, 
  LinkTag, 
  BioPics
} from "../styled-components/resources";

const Resources = () => {
  return (
    <ResourcesContainer>
    <NavigateBackButton />
    <Header>This Site Was Created By</Header>
      <LinkWrapper>
          <ProfileLinkTag
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nosslexa">
            &nbsp; ☞ Frida Axelsson
            <BioPics src={FA} alt="Frida Axelsson" />
          </ProfileLinkTag>
          <ProfileLinkTag
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/savannah-hayes">
            &nbsp; ☞ Savannah Hayes
            <BioPics src={SH} alt="Savannah Hayes" />
          </ProfileLinkTag>
          <ProfileLinkTag
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sofiaringstedt">
            &nbsp; ☞ Sofia Ringstedt
            <BioPics src={SR} alt="Sofia Ringstedt" />
          </ProfileLinkTag>
        </LinkWrapper>
        <ResourcesWrapper>
        <li>
          The data in the High Risk Area Map of reported cases of TBE per municipality in 2021 comes from the Swedish Publish Health Agency,
          <LinkTag 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.folkhalsomyndigheten.se/folkhalsorapportering-statistik/statistik-a-o/sjukdomsstatistik/tick-borne-encephalitis-tbe/">
            &nbsp; ☞ Folkhälsomyndigheten
          </LinkTag>
        </li>
        <br />
        <li>
          All the information about ticks and TBE comes the national Healtcare Guide 1177,
          <LinkTag 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.1177.se/en/Stockholm/other-languages/other-languages/symtomsjukdom---andra-sprak/biten-av-fasting---andra-sprak/">
            &nbsp; ☞ 1177
          </LinkTag>
        </li>
      </ResourcesWrapper>
    </ResourcesContainer>
  );
};

export default Resources;