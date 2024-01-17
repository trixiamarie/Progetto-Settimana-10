import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CityWeather from "./CityWeather";
import PageNotFound from "./PageNotFound";
import { apiKey } from "../api";

const DetailPage = () => {
  const { searchValue } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const cityName = searchValue;
  const limit = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cityName, limit]);

  return (
    <div>
      {weatherData ? (
        <>
          <CityWeather lat={weatherData.lat} lon={weatherData.lon} />
        </>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default DetailPage;
