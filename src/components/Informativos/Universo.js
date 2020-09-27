import React from "react";
import img2 from "../../assets/images/planetas/universo.png";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,

  Row,
  Col,
} from "reactstrap";
const Universo = () => {
  return (
    <div>
      <h1>
        <strong>El Universo </strong>
      </h1>
      <Row>
        <Card inverse>
          <CardImg width="18px" src={img2} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Que es una nebulosa? </strong>
            </CardTitle>
            <CardText>
              Una nebulosa es una nube gigante de polvo y gas en el espacio.
              Algunas nebulosas provienen del gas y el polvo expulsado por la
              explosión de una estrella moribunda, como una supernova . Otras
              nebulosas son regiones donde comienzan a formarse nuevas
              estrellas. Por esta razón, algunas nebulosas se llaman "viveros de
              estrellas".
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Que es un año luz? </strong>
            </CardTitle>
            <CardText>
              Para medir la distancia de la mayoría de los cuerpos del espacio
              usamos los años luz. Un año luz es la distancia que la luz recorre
              en un año terrestre. Un año luz equivale aproximadamente a 9
              billones de kilómetros (cerca de 6 billones de millas). ¡Es decir
              un 9 con 12 ceros a la derecha!
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Que tan viejas son las galaxias? </strong>
            </CardTitle>
            <CardText>
              La mayoría de las galaxias tienen entre 10 mil millones y 13.6 mil
              millones de años. Nuestro universo tiene aproximadamente 13.8 mil
              millones de años, ¡así que la mayoría de las galaxias se formaron
              cuando el universo era bastante joven!
            </CardText>
          </Card>
        </Col>
      </Row>
      
    </div>
  );
};

export default Universo;
