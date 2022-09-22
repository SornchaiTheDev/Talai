import { Player } from "@lottiefiles/react-lottie-player";
import Talai from "./talai.json";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 justify-center items-center">
      <Player
        autoplay
        loop
        src={Talai}
        style={{ height: "200px", width: "200px" }}
      />
    </div>
  );
}

export default Loading;
