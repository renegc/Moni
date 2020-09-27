import React from "react";
import img2 from "../../assets/images/planetas/sol.png";


import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
 
  CardTitle,

  Row,
  Col,
} from "reactstrap";

const Sol = () => {
  return (
    <div>
      <h1>
        <strong>El Sol </strong>
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
              <strong>MANCHAS SOLARES Y LLAMARADAS SOLARES </strong>
            </CardTitle>
            <CardText>
              La superficie del Sol es un lugar muy ocupado. Tiene gases
              cargados eléctricamente que generan áreas de poderosas fuerzas
              magnéticas. Estas áreas se llaman campos magnéticos. Los gases del
              Sol se mueven constantemente, lo que enreda, estira y tuerce los
              campos magnéticos. Este movimiento crea mucha actividad en la
              superficie del Sol, llamada actividad solar.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>POR QUE NOS QUEMA EL SOL? </strong>
            </CardTitle>
            <CardText>
              El sol mantiene a nuestro planeta lo suficientemente cálido como
              para que puedan subsistir los seres vivos. Nos proporciona luz
              para que podamos ver. Pero también nos puede quemar. ¿Qué es lo
              que produce estas quemaduras?
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>¿QUÉ ES UN CICLO SOLAR? </strong>
            </CardTitle>
            <CardText>
              Nuestro Sol es una enorme bola de gas caliente cargada
              eléctricamente. Este gas cargado se mueve, generando un potente
              campo magnético. El campo magnético del Sol pasa por un ciclo,
              denominado el ciclo solar.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>¿QUÉ ES LA CORONA DEL SOL?</strong>
            </CardTitle>
            <CardText>
              Nuestro Sol está rodeado por una funda de gases llamada atmósfera.
              La corona es la parte más externa de la atmósfera del Sol.
            </CardText>
          </Card>
        </Col>
      </Row>
     
    </div>
  );
};

export default Sol;
