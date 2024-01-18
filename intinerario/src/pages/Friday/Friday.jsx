import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Friday = () => {
  const fridaySchedule = [
    {
      time: "4pm",
      toDo: "Wait for my baby to get to SA",
    },
    {
      time: "4-7pm",
      toDo: "Cuddle and get ready for fancy/casual 5 Month anniversary Date",
    },
    {
      time: "7:30 - 9:30pm",
      toDo: "Fancy/Casual anniversary Date",
    },
    {
      time: "9:30 - 10pm",
      toDo: "Walk and Hold Hands",
    },
    {
      time: "10 - 12am",
      toDo: "Bath Watch Movie/Series Cuddle",
    },
    {
      time: "12 - 2am",
      toDo: "Cuddle ;)",
    },
  ];
  return (
    <>
      <Container className="text-center mt-5">
        <Row className=" border border-3">
          <Col>
            <p className="fs-1 text-light mt-4 "> Friday</p>
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

export default Friday;
