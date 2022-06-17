import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import areas from "../data/mapAreas.json"

const Map = () => {
  const filteredHighRiskAreas = areas.filter(highRiskAreas => highRiskAreas.riskLevel === "high");
  const filteredLowRiskAreas = areas.filter(highRiskAreas => highRiskAreas.riskLevel === "low");

  return (
    <MapContainer center={[63, 16]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {areas.map((area) => {
        const positions = [area.lat, area.lng]
        const cityName = area.city
        return <Circle key={area.city} center={positions} radius={25000} color="orange"><Popup>{cityName}</Popup></Circle>
      })}

      {filteredHighRiskAreas.map((area) => {
        const positions = [area.lat, area.lng]
        const cityName = area.cityName
        return <Circle key={area.city} center={positions} radius={25000} color="red"><Popup>{cityName}</Popup></Circle>
      })}

      {filteredLowRiskAreas.map((area) => {
        const positions = [area.lat, area.lng]
        const cityName = area.cityName
        return <Circle key={area.city} center={positions} radius={25000} color="yellow"><Popup>{cityName}</Popup></Circle>
      })}
    </MapContainer>
  );
};

export default Map;