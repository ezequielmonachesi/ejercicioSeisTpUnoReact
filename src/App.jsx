import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdministrarColor from "./components/AdministrarColor";

function App() {
  return (
    <>
    <Container>
      <section className="text-center mt-3">
        <h1>Paleta de Colores</h1>
      </section>
      <AdministrarColor></AdministrarColor>
    </Container>
    </>
  );
}

export default App;
