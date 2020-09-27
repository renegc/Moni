import React from "react";
import img1 from "../../assets/images/planetas/tierrita.png";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  
  Row,
  Col,
} from "reactstrap";
const Tierra = () => {
  return (
    <div 
    >
      <h1>
        <strong>La Tierra </strong>
      </h1>
      <Row>
        <Card inverse >
          <CardImg width="18px" src={img1} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>
      <Row  >
        
        <Col sm="12">
          <Card body >
            <CardTitle><strong>Que es un tsunami? </strong></CardTitle>
            <CardText>
              es una serie de olas gigantes que ocurren luego de movimientos
              submarinos debidos a una variedad de eventos naturales como
              terremotos, erupciones volcánicas, deslizamientos y meteoritos.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle><strong>Que es un terremoto? </strong></CardTitle>
            <CardText>
              Un terremoto es un temblor intenso de la superficie terrestre. El
              temblor es causado por movimientos en la capa superior de la
              Tierra..
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle><strong>Por que Suceden los terremotos?</strong></CardTitle>
            <CardText>
              Aunque la Tierra aparenta ser un lugar con una superficie sólida,
              en realidad es extremadamente activa justo bajo su superficie. La
              Tierra está hecha de cuatro capas básicas: una corteza sólida, un
              manto caliente y casi sólido, un núcleo exterior líquido, y un
              núcleo interior sólido.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle><strong>Que es la niña?</strong></CardTitle>
            <CardText>
              La Niña es un patrón climático que comienza en el Océano Pacífico.
              El agua tibia del océano y las nubes se mueven hacia el oeste
              durante La Niña. Esto significa que lugares como Indonesia y
              Australia pueden recibir mucha más lluvia de lo habitual. Y
              lugares como el suroeste de los Estados Unidos pueden ser muy
              secos.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle><strong> A que distancia esta la tierra de la luna?</strong></CardTitle>
            <CardText>
            En realidad, están muy lejos una de la otra. La Luna está a una distancia promedio de 238,855 millas (384,400 km). ¿Cuán lejos es eso? Eso es como 30 Tierras.
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Tierra;
