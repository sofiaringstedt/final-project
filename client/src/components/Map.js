import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import "../app.css"
import areas from "../data/areas.json"

const Map = () => {
 return (
  <MapContainer center={[62, 15]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {areas.map((area) => {
  const positions = [area.coordinates.lat, area.coordinates.long]
  return <Circle key={area.id} center={positions} radius={30000} color="red"/>
  })}
</MapContainer>
 )
}

export default Map;