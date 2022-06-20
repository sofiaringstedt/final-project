import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import { displayCities } from "actions/mapActions";

import { MapWrapper, InfoText } from "../styled-components/map"

import NavigateBackButton from "reusables/NavigateBackButton";

const Map = () => {
  const [riskAreas, setRiskAreas] = useState([]);
  
  useEffect(() => {
    displayCities(setRiskAreas)
  }, [])

  const filteredLowRiskAreas = riskAreas.filter(lowRiskAreas => lowRiskAreas.riskLevel === "low");
  const filteredMidRiskAreas = riskAreas.filter(midRiskAreas => midRiskAreas.riskLevel === "mid");
  const filteredHighRiskAreas = riskAreas.filter(highRiskAreas => highRiskAreas.riskLevel === "high");

  const mapRiskAreas = (filteredRiskAreas, dotColor) => {
   return filteredRiskAreas.map((mapArea) => {
    const positions = [mapArea.lat, mapArea.lng]
    const cityName = mapArea.city
   return <Circle key={mapArea.city} center={positions} radius={25000} color={dotColor}><Popup>{cityName}</Popup></Circle>
  })
  }

  return (
    <MapWrapper>
    <NavigateBackButton />
    <InfoText>Click on markers to see city names</InfoText>
      <MapContainer center={[63, 16]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLowRiskAreas && mapRiskAreas(filteredLowRiskAreas, "yellow")}
        {filteredMidRiskAreas && mapRiskAreas(filteredMidRiskAreas, "orange")}
        {filteredHighRiskAreas && mapRiskAreas(filteredHighRiskAreas, "red")}
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;