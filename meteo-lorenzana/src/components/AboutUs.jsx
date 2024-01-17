import { Container } from "react-bootstrap";

export default function AboutUs() {
  const imageUrls = ["01d", "02d", "03d", "04d", "11d", "13d"];
  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column p-5"
      fluid
      style={{
        background:
          "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
      }}
    >
      <h2>About Us</h2>
      <div className="display-flex">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={`http://openweathermap.org/img/w/${url}.png`}
            alt={`${url}`}
          />
        ))}
      </div>

      <p className="text-center" style={{width:"20rem"}}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </Container>
  );
}
