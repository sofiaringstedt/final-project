import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import areas from "../data/mapAreas.json"

const Map = () => {
  const filteredLowRiskAreas = areas.filter(lowRiskAreas => lowRiskAreas.riskLevel === "low");
  const filteredMidRiskAreas = areas.filter(midRiskAreas => midRiskAreas.riskLevel === "mid");
  const filteredHighRiskAreas = areas.filter(highRiskAreas => highRiskAreas.riskLevel === "high");

  const mapRiskAreas = (filteredRiskAreas, dotColor) => {
   return filteredRiskAreas.map((mapArea) => {
    const positions = [mapArea.lat, mapArea.lng]
    const cityName = mapArea.city
   return <Circle key={mapArea.city} center={positions} radius={25000} color={dotColor}><Popup>{cityName}</Popup></Circle>
  })
  }

  return (
    <MapContainer center={[63, 16]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredLowRiskAreas && mapRiskAreas(filteredLowRiskAreas, "yellow")}
      {filteredMidRiskAreas && mapRiskAreas(filteredMidRiskAreas, "orange")}
      {filteredHighRiskAreas && mapRiskAreas(filteredHighRiskAreas, "red")}
    </MapContainer>
  );
};

export default Map;