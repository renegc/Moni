import React, {Fragment} from 'react';
import img2 from "../../assets/images/planetas/pintarparte.png";
import img3 from "../../assets/images/planetas/pintarrover.png";
import img4 from "../../assets/images/planetas/helicoptero.png";
import img5 from "../../assets/images/planetas/pintarneptuno.png";
import img6 from "../../assets/images/planetas/pintarurano.png";
import img7 from "../../assets/images/planetas/pintarsaturno.png";
import img8 from "../../assets/images/planetas/colorear.png";




import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,

  CardDeck,
 
  Button,
  Row
} from "reactstrap";
const Descargas = () => {
    return ( <Fragment>
         <h1>
        <strong>Descarga para colorear </strong>
      </h1>
      <Row>
        <Card inverse>
          <CardImg width="18px" src={img8} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>
    <CardDeck>
                <Card>
                    <CardImg top width="100%" src={img2} alt="Card image cap" />
                    <CardBody>
                       
                        <Button href={img2} download={img2}>Descargaar</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img4} alt="Card image cap" />
                    <CardBody>
                     
                        <Button href={img4} download={img4}>Descargaar</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img3} alt="Card image cap" />
                    <CardBody>
                       
                        <Button href={img3} download={img3}>Descargaar</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={img5} alt="Card image cap" />
                    <CardBody>
                       
                    
                        <Button href={img5} download={img5}>Descargaar</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img6} alt="Card image cap" />
                    <CardBody>
                     
                        <Button  href={img6} download={img6}>Descargaar</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img7} alt="Card image cap" />
                    <CardBody>
                       
                        <Button  href={img7} download={img7}>Descargaar</Button>
                    </CardBody>
                </Card>
            </CardDeck>
    </Fragment> );
}
 
export default Descargas;