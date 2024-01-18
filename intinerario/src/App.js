import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Friday from "./pages/Friday/Friday.jsx";
import { Row, Col, Container } from "react-bootstrap";
import Saturday from "./pages/Saturday/Saturday.jsx";
import Sunday from "./pages/Sunday/Sunday.jsx";

function App() {
  return (
    <>
    <Navbar />
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 className="text-light">
              Maria Cristina I Welcome you to your 5 Month anniversary Weekend
              Intinerary
            </h1>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Friday />} />
        <Route path="/saturday" element={<Saturday />} />
        <Route path="/sunday" element={<Sunday />} />
      </Routes>
    </>
  );
}

export default App;
