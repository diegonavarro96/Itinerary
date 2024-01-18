import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Sunday = () => {
  const fridaySchedule = [
    {
      time: "9 - 10 am",
      toDo: "tu novio se despierta  hacer hot cakes",
    },
    {
      time: "10-12 pm ",
      toDo: "Cuddle again ;)",
    },
    {
      time: "12- 3 pm",
      toDo: "Ir a comer y despedirme de mi novia",
    }
  ];
  return (
    <>
      <Container className="text-center mt-5">
        <Row className=" border border-3">
          <Col>
            <p className="fs-1 text-light mt-4 "> Sunday</p>
          </Col>
          <Col>
            <p className="fs-1 text-light mt-4"> To do</p>
          </Col>
        </Row>

        {fridaySchedule.map((Activity) => (
          <Row className="border border-3 mt-1">
            <Col>
              <p className="fs-2 text-light mt-4 "> {Activity.time}</p>
            </Col>
            <Col>
              <p className="fs-3 text-light mt-4"> {Activity.toDo}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Sunday;
