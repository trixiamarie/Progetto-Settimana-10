import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container
      fluid
      style={{
        background:
          "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
        height: "75vh",
      }}
    >
      <h1 className="text-center text-white">404</h1>
      <p className="text-center text-white">
        Are you in space?{" "}
        <Link as={Link} to="/" className="text-danger">
          Try again
        </Link>
      </p>
    </Container>
  );
}
