import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function CardCreator(props) {
  return (
    <>
      <Row className="m-5">
        {props.array.map((x, index) => {
          const dateWithoutTime = x.dt_txt.slice(0, 10);

          return (
            <Card className="m-2" style={{ width: "18rem" }} key={index}>
              <Card.Body>
                <Card.Title>{dateWithoutTime}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Temperature: {Math.round(x.main.temp - 273.15)}°C -{" "}
                  {x.main.temp}°F
                </Card.Subtitle>
                <Card.Text>
                  <img
                    src={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`}
                    alt={x.weather[0].icon}
                  />
                  <p>Description: {x.weather[0].description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </>
  );
}
