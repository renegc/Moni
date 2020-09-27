import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';


import img1 from '../assets/images/planetas/tierrita.png';
import img2 from '../assets/images/planetas/sol.png';
import img3 from '../assets/images/planetas/sistema.png';
import img4 from '../assets/images/planetas/universo.png';
import Background from '../assets/images/planetas/uni.jpg';
import img5 from '../assets/images/planetas/mar.png';
import img6 from '../assets/images/planetas/colorear.png';
import img7 from '../assets/images/planetas/rover.png';
import back2 from '../assets/images/planetas/coso.png';
import joy  from '../assets/images/planetas/joys.png';
import libro  from '../assets/images/planetas/libro.png';

import tijeras  from '../assets/images/planetas/tijeras.png';
import videos  from '../assets/images/planetas/videos.png';

import {useHistory} from 'react-router-dom';

const Starter = () => {
    const history = useHistory();

    const redireccion1 = ()  => {
       history.push('/tierra')
    }
    const redireccion2 = ()  => {
       history.push('/sol')
    }
    const redireccion3 = ()  => {
       history.push('/sistema')
    }
    const redireccion4 = ()  => {
       history.push('/universo')
    }
    const redireccion5 = ()  => {
        history.push('/juego')
     }

     const redireccion6 = ()  => {
        history.push('/marte')
     }
     const redireccion7 = ()  => {
        history.push('/rover')
     }
     const redireccion8 = ()  => {
        history.push('/color')
     }
     const redireccion9 = ()  => {
        history.push('/tijeras')
     }
     const redireccion10 = ()  => {
         history.push('/glosario')
      }
      const redireccion11 = ()  => {
        history.push('/videos')
     }
    return (
        <div style={{backgroundImage: `url(${Background})`}}> 
           
            <Row style={{backgroundImage: `url(${Background})`}}>
              
                <Col xs="12" md="3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img1} />
                        <CardBody>
                            <CardTitle>Tierra</CardTitle>                           
                            <CardText>Coonoce mas sobre nuestro planeta</CardText>
                            <Button
                            onClick={redireccion1}
        
                            >Conoce mas</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img2} />
                        <CardBody>
                            <CardTitle>Sol</CardTitle>                            
                            <CardText>Conoce mas sobre nuestra estrella</CardText>
                            <Button
                                  onClick={redireccion2}
                            >Vamooos!</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img3} />
                        <CardBody>
                        <CardTitle>Sistema</CardTitle>                            
                            <CardText>Conoce mas sobre nuestra sistema solar</CardText>
                            <Button
                                  onClick={redireccion3}
                            >Entraaa!</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img4} />
                        <CardBody>
                        <CardTitle>Universo</CardTitle>                            
                            <CardText>Conoce mas sobre el basto universo</CardText>
                            <Button
                                  onClick={redireccion4}
                            >Entra!</Button>
                        </CardBody>
                    </Card>
                </Col>

                
           
            </Row>
            <br></br>
            <br></br>
            <Row style={{backgroundImage: `url(${Background})`}}>
              
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card style={{backgroundColor: "black"}}>
                        <CardImg top width="100%" src={img5} />
                        <CardBody>
                            <CardTitle>Todo sobre Marte</CardTitle>                       
                          
                            <Button
                            onClick={redireccion6}
        
                            >Entrar</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card style={{backgroundColor: "black"}}>
                        <CardImg top width="100%" src={img6} />
                        <CardBody>
                            <CardTitle>Descarga para colorear</CardTitle>                            
                            <Button
                                  onClick={redireccion8}
                            >Entrar</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card style={{backgroundColor: "black"}}>
                        <CardImg top width="100%" src={img7} />
                        <CardBody>
                        <CardTitle>El rover perseverance</CardTitle>                            
                            <Button
                                  onClick={redireccion7}
                            >Entrar</Button>
                        </CardBody>
                    </Card>
                </Col>
         

                
           
            </Row>
            <br></br>
            <br></br>
            <Row style={{backgroundImage: `url(${Background})`}}>
            <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card style={{backgroundImage: `url(${back2})`}}>
                    <CardBody>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>        
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>    
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                                                   
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    <Row>
                        <Col xs="12" md="6">
                        
                           
                            <Card style={{backgroundColor: "green"}}>
                        <CardImg top width="100%" src={joy} />
                        <CardBody>                                                 
                            <Button
                                  onClick={redireccion5}
                            >Entrar</Button>
                        </CardBody>
                    </Card>
                  

                   
                               
                         
                        </Col>
                        <Col xs="12" md="6"> 
                        <Card style={{backgroundColor: "blue"}}>
                        <CardImg top width="100%" src={tijeras} />
                        <CardBody>                                                 
                            <Button
                                  onClick={redireccion9}
                            >Entrar</Button>
                        </CardBody>
                    </Card></Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6"> <Card style={{backgroundColor: "yellow"}}>
                        <CardImg top width="100%" src={libro} />
                        <CardBody>                                                 
                            <Button
                                  onClick={redireccion10}
                            >Entrar</Button>
                        </CardBody>
                    </Card>
                            </Col>
                        <Col xs="12" md="6"> <Card style={{backgroundColor: "grape"}}>
                        <CardImg top width="100%" src={videos} />
                        <CardBody>                                                 
                            <Button
                                  onClick={redireccion11}
                            >Entrar</Button>
                        </CardBody>
                    </Card></Col>
                    </Row>
                 
                    
                </Col>
            </Row>
            
        </div>
    );
}

export default Starter;
