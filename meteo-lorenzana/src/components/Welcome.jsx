import { Container } from "react-bootstrap";
import "../App.css";

export default function Welcome() {
  const imageUrls = ["01d", "02d", "03d", "04d", "11d", "13d"];
  return (
    <Container
      fluid
      className="text-center text-white"
      style={{
        height: "70vh",
        background:
          "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
      }}
    >
      <p className="m-0 p-5 fs-1 fw-bold">Welcome to Meteo!</p>
      <div className="display-flex">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={`http://openweathermap.org/img/w/${url}.png`}
            alt={`${url}`}
          />
        ))}
      </div>
      <p className="pt-5 m-0 fs-5">
        Search your city and find out the weather!
      </p>
    </Container>
  );
}
