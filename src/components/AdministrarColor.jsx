import { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import RowTarjetaColor from "./rowTarjetaColor";

const AdministrarColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState(JSON.parse(localStorage.getItem('colores')) || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    setColor("");
  };

  const borrarColor = (color) => {
    let copiaColor = colores.filter((elemento) => elemento !== color);
    setColores(copiaColor);
  }
  useEffect(()=>{
    localStorage.setItem('colores', JSON.stringify(colores))
  })

  return (
    <>
      <Row className="py-5 border shadow mt-5 rounded-3">
        <Col className="d-flex justify-content-center align-items-center">
          <div
            style={{
              background: "red",
              width: "100px",
              height: "100px",
            }}
            className="rounded-3"
          ></div>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="controlForm">
              <Form.Label>Elija un color en inglés</Form.Label>
              <Form.Control
                type="text"
                placeholder="Por ejemplo: Blue"
                onChange={(e) => setColor(e.target.value.toLocaleLowerCase())}
                value={color}
              />
              <Button className="mt-2" type="submit">
                Enviar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <RowTarjetaColor colores={colores} borrarColor={borrarColor}></RowTarjetaColor>
    </>
  );
};

export default AdministrarColor;
