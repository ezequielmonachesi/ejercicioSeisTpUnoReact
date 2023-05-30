import { Button, Card, Col } from "react-bootstrap";

const TarjetaColor = () => {
  return (
    <Col xs md="4" className="mt-5">
      <Card className="shadow">
        <Card.Header className="text-start">
          <p>Blue</p>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center">
          <div
            style={{ background: "blue", width: "100px", height: "100px" }}
            className="rounded-3"
          ></div>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="danger">Borrar</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TarjetaColor;
