import Typist from "react-typist";
import "./Typist.css";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div>
      <img alt="logo" src={require("./logo.jpg")} />
      <Typist className="loading-text">Potion Brewing...</Typist>
    </div>
  );
}

export default LoadingScreen;
