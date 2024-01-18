import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Saturday = () => {
  const fridaySchedule = [
    {
      time: "9 am",
      toDo: "Tu novio Despierta para hacerte de desayunar",
    },
    {
      time: "10-11am",
      toDo: "Desayuno con tu novio",
    },
    {
      time: "11 - 12pm",
      toDo: "Get ready",
    },
    {
      time: "12 - 2pm",
      toDo: "Drive to where your brother recommended us (Or see what else we can do)",
    },
    {
      time: "2pm - 3:30",
      toDo: "Comer (Yet to be decided)",
    },
    {
      time: "3:30 - 7 pm",
      toDo: "Pasar el rato donde estemos",
    },
    {
        time: "7 - 9 pm",
        toDo: "Ir al depa ;)",
      },
      {
        time: "9 - 11 pm",
        toDo: "Ver una serie/Pelicula Que mi novia quiera ver",
      },
      {
        time: "11 - 1 am",
        toDo: "Round 3",
      },
  ];
  return (
    <>
      <Container className="text-center mt-5">
        <Row className=" border border-3">
          <Col>
            <p className="fs-1 text-light mt-4 "> Saturday</p>
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

export default Saturday;
