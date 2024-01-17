import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Forecast from "./Forecast";
import { apiKey } from "../api";

const CityWeather = () => {
  const { searchValue } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const cityName = searchValue;
  const limit = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
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
        <Container
          className="d-flex justify-content-center align-items-center flex-column p-5"
          fluid
          style={{
            background:
              "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
          }}
        >
          <p className="text-center text-white fs-3 pt-3 fw-bold">Today</p>
          <Card style={{ width: "18rem", height: "max-content" }}>
            <Card.Body>
              <Card.Title>
                {weatherData.name}{" "}
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt={weatherData.weather[0].icon}
                />
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {weatherData.sys.country}
              </Card.Subtitle>
              <Card.Text>
                <p>
                  <code className="text-black">&#40;</code>lon:
                  {weatherData.coord.lon}, lat:{weatherData.coord.lat}
                  <code className="text-black">&#41;</code>
                </p>
                <p>
                  Temperature: {Math.round(weatherData.main.temp - 273.15)}°C -{" "}
                  {weatherData.main.temp}°F
                </p>
                <p>Description: {weatherData.weather[0].description}</p>
              </Card.Text>
              <Card.Link as={Link} to="/">
                Try again!
              </Card.Link>
            </Card.Body>
          </Card>
          <Forecast lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
        </Container>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default CityWeather;
