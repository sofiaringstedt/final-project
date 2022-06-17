import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import areas from "../data/mapAreas.json"

const Map = () => {
  const filteredLowRiskAreas = areas.filter(lowRiskAreas => lowRiskAreas.riskLevel === "low");
  const filteredMidRiskAreas = areas.filter(midRiskAreas => midRiskAreas.riskLevel === "mid");
  const filteredHighRiskAreas = areas.filter(highRiskAreas => highRiskAreas.riskLevel === "high");

  return (
    <MapContainer center={[63, 16]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredLowRiskAreas.map((area) => {
        const positions = [area.lat, area.lng]
        const cityName = area.city
        return <Circle key={area.city} center={positions} radius={25000} color="yellow"><Popup>{cityName}</Popup></Circle>
      })}

      {filteredMidRiskAreas.map((area) => {
        const positions = [area.lat, area.lng]
        const cityName = area.city
        return <Circle key={area.city} center={positions} radius={25000} color="orange"><Popup>{cityName}</Popup></Circle>
      })}

      {filteredHighRiskAreas.map((area) => {
        const positions = [area.lat, area.lng]
        const cityName = area.city
        return <Circle key={area.city} center={positions} radius={25000} color="red"><Popup>{cityName}</Popup></Circle>
      })}
    </MapContainer>
  );
};

export default Map;