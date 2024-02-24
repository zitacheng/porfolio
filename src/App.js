import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import {experiences} from './constant.js';
import email from './Assets/email.png';
import octopus from './Assets/octopus.webp';
import lkdn from './Assets/lkdn.png';
import youtube from './Assets/youtube.png';
import apple from './Assets/apple.JPG';
import dark from './Assets/dark.JPG';
import bridge from './Assets/bridge.JPG';
import fr from './Assets/fr.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {

  const [project, setProjet] = useState(experiences[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, [project]);

  return (
    <Container className="vh-100 mx-0 px-2 w-100 App main py-3" fluid>
      <Navbar expand="lg" className="bg-body-tertiary menuMain">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav "/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="text-center menuItem" href="#about">À PROPOS</Nav.Link>
              <Nav.Link className="text-center menuItem" href="#experience">EXPÉRIENCES</Nav.Link>
              {/* <Nav.Link className="text-center menuItem" href="#school">COMPÉTENCES</Nav.Link> */}
              {/* <Nav.Link className="text-center"><Image src={fr} className="d-inline-block flag" alt="flag icon"/></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row id="home" className="mx-0">
        <Col className="px-0">
            <Carousel fade>
              <Carousel.Item>
              <Image src={dark} text="First slide" className="slideImg"/>
              <Carousel.Caption>
                <h1 className="mx-auto text-center title typewriter mt-4">Zita Athomas</h1>
                <h4 className="mx-auto text-center sub typewriter mt-2">Développeuse Web / Mobile</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={bridge} text="Second slide" className="slideImg"/>
              <Carousel.Caption>
                <h1 className="mx-auto text-center title typewriter mt-4">Zita Athomas</h1>
                <h4 className="mx-auto text-center sub typewriter mt-2">Développeuse Web / Mobile</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={apple} text="Third slide" className="slideImg"/>
              <Carousel.Caption>
                <h1 className="mx-auto text-center title typewriter mt-4">Zita Athomas</h1>
                <h4 className="mx-auto text-center sub typewriter mt-2">Développeuse Web / Mobile</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row id="experience" className="mx-0 my-4">
        <h1 className="mx-auto text-center title mt-4">Expériences</h1>
        <h3 className="role text-center mb-4">{project.role}</h3>
        <Col md={3} align="center" className='mt-3'>
          <Row className="mx-2">
            {experiences.map((item, idx) => (
             <p key={idx} className={item.id == project.id ? "projectMenuActive" : "projectMenu"}
                onClick={() => {
                  setLoading(true);
                  setProjet(item);
                }}>{item.title}</p>
              ))
            }
          </Row>
        </Col>
        <Col align="center" className='mt-3'>
        <Row className="mx-0">
          {
            !loading && project?.img?.map((item, idx) => (
              <Col md={item.md} className="slideInRow">
                <Image onLoad={() => {}} key={idx} src={item.file} className="mockupIphone" />
              </Col>
              ))
          }
        </Row>
        </Col>
      </Row>
      <Row id="about" className="mx-0">
        <Col>
          <h2 className="mx-auto text-center title mt-4">À propos</h2>
          <Image src={dark} className="avatar mt-4" />
        </Col>
      </Row>
      <Row className="footer mx-0 p-4 justify-content-center">
        <a className="footerLink" href="https://www.linkedin.com/in/zita-cheng-864891114/" target="_blank"><Image src={lkdn} className="iconSocial" /></a>
        <a className="footerLink" href="https://www.youtube.com/channel/UCohCdvYekCwfXkMXc6tt8Ag" target="_blank"><Image src={youtube} className="iconSocial" /></a>
        <a className="footerLink" href="https://github.com/zitacheng" target="_blank"><Image src={octopus} className="iconSocial" /></a>
        <a className="footerLink" href="mailto:chengxiedan@gmail.com"><Image src={email} className="iconSocial" /></a>
        <p className="text-white text-center">Copyright @ 2024 Zita athomas. All rights reserved.</p>
      </Row>
    </Container>
  );
}

export default App;
