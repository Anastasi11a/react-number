import FlipCoin from "./components/FlipCoin";
import GenerateRandomNum from "./components/GenerateRandomNum";
import RandomColor from "./components/RandomColor";
import RandomNames from "./components/RandomNames";
import RandomPassword from "./components/RandomPassword";
import Rolling from './components/Rolling';
import RollingSum from "./components/RollingSum";

function App() {
  return (
    <div>
      <GenerateRandomNum />
      <Rolling />
      <RollingSum />
      <RandomColor />
      <FlipCoin />
      <RandomNames />
      <RandomPassword />
    </div>
  );
}

export default App;
