import { Button, Card, Col } from "react-bootstrap";

const TarjetaColor = ({color, borrarColor}) => {
  return (
    <Col xs md="4" className="mt-5">
      <Card className="shadow">
        <Card.Header className="text-start">
          <p>{color}</p>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center">
          <div
            style={{ background: color, width: "100px", height: "100px" }}
            className="rounded-3"
          ></div>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="danger" onClick={()=>borrarColor(color)}>Borrar</Button>
        </Card.Footer>
      </Card>
    </Col>
  )
};

export default TarjetaColor;
