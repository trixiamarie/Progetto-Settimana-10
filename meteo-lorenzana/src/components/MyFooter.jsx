import Container from "react-bootstrap/esm/Container";

export default function MyFooter() {
  return (
    <Container fluid className="bg-dark">
      <div>
        <p className="text-white text-center p-5 m-0">
          Copyright <code className="text-white">&copy;</code>2024 Trixia M.
          Lorenzana
        </p>
      </div>
    </Container>
  );
}
