import { Col, Row, Form } from "react-bootstrap";

const AdministrarColor = () => {
  return (
    <>
      <h3>Ingrese un color</h3>
      <Row className="py-5 bg-danger">
        <Col>
          <p>Color</p>
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="text"
            id="inputColor"
            placeholder="Ingrese un color"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Por ejemplo: Azul, Verde, Amarillo, Rojo, Negro.
          </Form.Text>
        </Col>
      </Row>
    </>
  );
};

export default AdministrarColor;
