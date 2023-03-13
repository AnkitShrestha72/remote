import React, { useEffect, useState } from "react";
// import Temperature from './Components/Temperature';

import "./Style.css";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  useEffect(() => {
    if (temperatureValue < 15) {
      setTemperatureValue("cold");
    } else if (temperatureValue >= 15 && temperatureValue <= 25) {
      setTemperatureValue("hot");
    } else if (temperatureValue >= 25) {
      setTemperatureValue("superhot");
    }
  }, [temperatureValue]);

  const increaseTemperature = () => {
    if (temperatureValue >= 35) return;
    setTemperatureValue(temperatureValue + 1);
  };

  const decreaseTemperature = () => {
    if (temperatureValue <= 0) return;
    setTemperatureValue(temperatureValue - 1);
  };
  return (
    <>
      <div className="app-container">
        <div className="first">
        <h1>Hello from temperature</h1>
        </div>
        <div className="temperature-display-container">
          <h1>hey how are you</h1>
        </div>   
        <div className="buttont">
          <button onClick={() => increaseTemperature()}> + </button>
          <button onClick={() => decreaseTemperature()}> - </button>
        </div>
      </div>
    </>
  );
}

export default App;
