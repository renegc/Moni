import React from "react";
import img2 from "../../assets/images/planetas/sistema.png";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,

  Row,
  Col,
} from "reactstrap";

const Sistema = () => {
  return (
    <div>
      <h1>
        <strong>El Sistema Solar </strong>
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
              <strong>Cráter de impacto </strong>
            </CardTitle>
            <CardText>
              Un cráter de impacto se forma cuando un objeto como un asteroide o
              un meteorito choca con la superficie de un objeto sólido más
              grande como un planeta o una luna.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Como se bloque completamente un eclipse?</strong>
            </CardTitle>
            <CardText>
            Durante un eclipse total de sol, la luna pasa entre la tierra y el sol. Esto bloquea completamente la luz del sol.. Sin embargo, la luna es unas 400 veces mas pequeña que el sol.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>¿Como pesamos un planeta? </strong>
            </CardTitle>
            <CardText>
            Para pesar los planetas, los científicos deben saber dos cosas: cuánto tardan los cuerpos en orbitar a su alrededor y cuán lejos se encuentran esos elementos del planeta. El tiempo que tarda un cuerpo en orbitar alrededor de un planeta depende de la distancia que lo separa de él y de su peso.
            </CardText>
          </Card>
        </Col>
      </Row>
     
    </div>
  );
};

export default Sistema;
