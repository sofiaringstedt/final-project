import React from "react";
import HomeButton from "reusables/HomeButton";

const Resources = () => {
  return (
    <>
    <HomeButton />
      <ul>
        <li>
          Map of reported cases of TBE per municipality in 2021 data:
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.folkhalsomyndigheten.se/folkhalsorapportering-statistik/statistik-a-o/sjukdomsstatistik/tick-borne-encephalitis-tbe/">
              Folkhalsomyndigheten
          </a>
        </li>
        <li></li>
        <li>Site created by Sofia Ringstedt, Frida Axelsson, and Savannah Hayes.</li>
      </ul>
    </>
  );
};

export default Resources;