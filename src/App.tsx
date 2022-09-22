import Map from "./components/Map";
import { HiOutlineSearch } from "react-icons/hi";
import BottomCard from "./components/BottomCard";
import Loading from "./components/Loading";
import { useGeolocated } from "react-geolocated";
function App() {
  const { coords } = useGeolocated();
  return (
    <>
      {!coords && <Loading />}
      <div className="w-full h-screen relative">
        <Map />
        <BottomCard />
      </div>
    </>
  );
}

export default App;
