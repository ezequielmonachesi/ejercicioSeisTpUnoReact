import { Row } from "react-bootstrap";
import TarjetaColor from "./TarjetaColor";

const RowTarjetaColor = ({colores, borrarColor}) => {
    return (
        <Row className="justify-content-center">
            {colores.map((e,i)=><TarjetaColor color={e} key={i} borrarColor={borrarColor}></TarjetaColor>)}
            
        </Row>
    );
};

export default RowTarjetaColor;