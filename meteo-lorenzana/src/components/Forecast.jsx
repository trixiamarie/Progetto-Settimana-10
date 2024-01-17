import React, { useEffect, useState } from "react";
import { apiKey } from "../api";
import CardCreator from "./CardCreator";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log("data", data);
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [props.lat, props.lon]);

  return (
    <div>
      <p className="text-center text-white fs-3 pt-3 fw-bold">
        In the next 5 days...
      </p>
      {weatherData && weatherData.list ? (
        <CardCreator
          array={[
            weatherData.list[7],
            weatherData.list[15],
            weatherData.list[23],
            weatherData.list[31],
            weatherData.list[39],
          ]}
        />
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
}

// [weatherData.list[7], weatherData.list[15], weatherData.list[23], weatherData.list[31], weatherData.list[39]]
