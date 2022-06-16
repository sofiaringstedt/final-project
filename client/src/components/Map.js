import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import areas from "../data/mapAreas.json"

const Map = () => {
  const filteredHighRiskAreas = areas.filter(highRiskAreas => highRiskAreas.highRisk === true);

  return (
    <MapContainer center={[63, 16]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {areas.map((area) => {
        const positions = [area.coordinates.lat, area.coordinates.long]
        const cityName = area.cityName
        return <Circle key={area.id} center={positions} radius={30000} color="orange"><Popup>{cityName}</Popup></Circle>
      })}

      {filteredHighRiskAreas.map((area) => {
        const positions = [area.coordinates.lat, area.coordinates.long]
        const cityName = area.cityName
        return <Circle key={area.id} center={positions} radius={30000} color="red"><Popup>{cityName}</Popup></Circle>
      })}
    </MapContainer>
  );
};

export default Map;