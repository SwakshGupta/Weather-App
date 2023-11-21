import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const apiKey = "388b93aa6652580480d32648a68a8b49";
  const [inputcity, setinputcity] = useState("");

  const handleclicked = () => {
    WeatherApp(inputcity);
  };

  const inputbar = (e) => {
    setinputcity(e.target.value);
  };
  const WeatherApp = (cityName) => {
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;

    axios
      .get(apiURL)
      .then((res) => {
        console.log("res", res.data);
        setData(res.data); // by doing this i have saved all the data in res.data using use state hook
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    WeatherApp("delhi");
  }, []); // it will run WeatherApp function by default

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <div>
          <input type="text" onChange={inputbar} const value={inputcity} />
          <br />
          <br />
          <button onClick={handleclicked}>Search</button>

          <div>
            <h2> City {data?.name}</h2>

            <p> temp is {data?.main?.temp - 273}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
