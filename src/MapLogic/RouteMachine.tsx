import L, { Control } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

interface Waypoint {
  lat: number;
  lng: number;
  name: string;
}

const createRoutineMachineLayer = (props: any) => {
  console.log(
    props.waypoints.map(({ lat, lng }: Waypoint) => L.latLng(lat, lng))
  );

  // @ts-ignore
  const instance = L.Routing.control({
    waypoints: props.waypoints.map(({ lat, lng }: Waypoint) =>
      L.latLng(lat, lng)
    ),

    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },

    show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
