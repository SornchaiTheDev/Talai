import { useGeolocated } from "react-geolocated";
import { TbCurrentLocation } from "react-icons/tb";
import { useMap } from "react-leaflet";

function CurrentLocation() {
  const map = useMap();
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  const handleOnClick = () => {
    if (coords) {
      map.flyTo([coords.latitude, coords.longitude]);
    }
  };

  return (
    <button
      className="p-7 rounded-full bg-white self-end mr-2 fixed shadow-md right-0 bottom-[8.2rem]"
      onClick={handleOnClick}
      style={{ zIndex: 500 }}
    >
      <TbCurrentLocation className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl" />
    </button>
  );
}

export default CurrentLocation;
