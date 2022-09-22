import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { allTalaiWaypoint } from "../../talai_waypoint";
import { lines } from "../../talai_waypoint/lines";
import {
  Line1Icon,
  Line2Icon,
  Line3Icon,
  Line4Icon,
  Line5Icon,
  Bus1Icon,
  Bus2Icon,
  Bus3Icon,
  Bus4Icon,
  Bus5Icon,
  YouIcon,
} from "./Icon";
import { useGeolocated } from "react-geolocated";
import { LatLngExpression } from "leaflet";
import CurrentLocation from "../CurrentLocation";

function Map() {
  const [yourLocation, setYourlocation] = useState<LatLngExpression>([0, 0]);
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });
  useEffect(() => {
    if (coords) setYourlocation([coords.latitude, coords.longitude]);
  }, [coords]);

  return (
    <MapContainer
      center={[13.8420729, 100.575791]}
      zoom={20}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {allTalaiWaypoint
        .filter(({ id }) => lines[0].waypoints.includes(id))
        .map(({ lat, lng }, index) => (
          <Marker key={index} position={[lat, lng]} icon={Line1Icon} />
        ))}
      <CurrentLocation />
      <Marker position={yourLocation} icon={YouIcon} />
    </MapContainer>
  );
}

export default Map;
