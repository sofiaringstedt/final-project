// import React, { useState } from "react";

// export const currentLocation = () => {
//   if (!navigator.geolocation) {
//     setStatus("Geolocation is not supported by your browser");
//   } else {
//     setStatus("...locating you")
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setStatus(null);
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
//         return[position.coords.latitude, position.coords.longitude]
//       }, 
//         () => {
//           setStatus("Unable to retrieve your location");
//           return[0,0]
//         }
//     );
//   }

// const FindMyLocation = () => {
//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [status, setStatus] = useState("");

//   return (
//     <div>
//       <button onClick={currentLocation}>Where on Earth am I?</button>
//         <h1>Coordinates</h1>
//           <p>{status}</p>
//           {lat && <p>Latitude: {lat}</p>}
//           {lng && <p>Longitude: {lng}</p>}
//       </div>
//   );
// };
// }