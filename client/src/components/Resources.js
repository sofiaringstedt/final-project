import React from "react";
import NavigateBackButton from "reusables/NavigateBackButton";

const Resources = () => {
  return (
    <>
    <NavigateBackButton />
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