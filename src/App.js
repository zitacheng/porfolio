import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import {experiences} from './constant.js';
import www from './Assets/www.png';
import googleplay from './Assets/googleplay.webp';
import appstore from './Assets/appstore.png';
import email from './Assets/email.png';
import insta from './Assets/instagram.png';
import octopus from './Assets/octopus.webp';
import lkdn from './Assets/lkdn.png';
import youtube from './Assets/youtube.png';
import zita from './Assets/zita.JPG';
import apple from './Assets/apple.JPG';
import dark from './Assets/dark.JPG';
import yosemite from './Assets/yosemite.JPG';
import fr from './Assets/fr.png';
import cn from './Assets/cn.png';
import us from './Assets/us.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

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
              <Nav.Link className="text-center menuItem" href="#experience">EXPÉRIENCES</Nav.Link>
              <Nav.Link className="text-center menuItem" href="#about">À PROPOS</Nav.Link>
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
            <Image src={yosemite} text="Second slide" className="slideImg"/>
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
        <Col md={2} align="center" className='mt-3'>
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
        <Col align="center" className='mt-3 mb-0'>
          <Row className="mx-0 mb-0">
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
      <p className="desc text-center w-75 mx-auto mt-0">{project.desc}</p>
      <Stack direction="horizontal" gap={2} className="justify-content-center mb-4">
        {
          project?.tech?.map((item, idx) => (
              <Badge pill className="badge" bg="dark">
                {item}
              </Badge>
            ))
        }
      </Stack>
      <Row className="mx-0 justify-content-center">
        {
          project?.link &&
          <a className="dlIcon" href={project.link} target="_blank"><Image src={www} className="dlIcon p-0 mr-4" /></a>
        }
        {
          project?.apple &&
          <a className="dlIcon" href={project.apple} target="_blank"><Image src={appstore} className="dlIcon p-0 mr-4" /></a>
        }
        {
          project?.google &&
          <a className="dlIcon" href={project.google} target="_blank"><Image src={googleplay} className="dlIcon p-0 mr-4" /></a>
        }
      </Row>
      <Row id="about" className="mx-0 aboutBg px-4 mt-4 justify-content-center">
        <h2 className="mx-auto text-center title my-4 text-white">À propos</h2>
        <Col md={3} className='mt-4'>
          <Image src={zita} className="avatar" roundedCircle/>
          <h4 className='text-white bioTitle mt-3'>Zita Athomas</h4>
          <h5 className='text-white bioSub mt-3'>Développeuse web / mobile</h5>
          <p className='text-white bioDesc mt-4'>
          Après ma première année de DUT en réseaux et télécommunications, j'ai découvert la programmation et suis devenu passionné par cet univers. J'ai ensuite intégré Epitech, une école d'informatique, dès l'année suivante.<br/><br/>
          Mon expérience à Epitech m'a permis de développer mon autonomie et d'apprendre rapidement. J'accorde une importance particulière à l'écriture d'un code propre et soigné, ainsi qu'à un design bien pensé.<br/><br/>
          Si vous avez besoin d'une développeuse web/mobile, n'hésitez pas à me contacter.
          </p>
        </Col>
        <Col md={6} className='mt-4'>
            <ul>
            <li className="">
                  <div className="date">2024</div>
                  <div className="titleTime">Freelance</div>
                  <div className="descr">Travaille sur divers projets mobile dont Kornette et Amapop.</div>
              </li>
              <li className="">
                  <div className="date">2021</div>
                  <div className="titleTime">Akius</div>
                  <div className="descr">Développeuse Front-end Web au startup Akius.</div>
              </li>
              <li className="">
                  <div className="date">2018</div>
                  <div className="titleTime">CSULB</div>
                  <div className="descr">Année d'échange à Long Beach aux États-Unis dans le département de l'ingénierie.</div>
              </li>
              <li className="">
                  <div className="date">2015</div>
                  <div className="titleTime">Epitech</div>
                  <div className="descr">École d'expert en ingénierie informatique logicielle.</div>
              </li>
              <li className="">
                  <div className="date">2014</div>
                  <div className="titleTime">IUT Réseaux & Télécommunication</div>
                  <div className="descr">Découverte du codage.</div>
              </li>
          </ul>
        </Col>
        {/* <Col className='mt-4'>
          <h4 className='text-white subTitle text-center'>Centre d'intérêts</h4>
         </Col> */}
      </Row>
      <Row id="about" className="mx-0 aboutBg px-4 mt-0 justify-content-center">
        <Col md={3}>
          <h4 className='text-white subTitle mb-3'>Centre d'intérêts</h4>
          <p className="text-white lang">Snowdoard</p>
          <p className="text-white lang">Midjourney</p>
          <p className="text-white lang">Skate</p>
          <p className="text-white lang">Voyage</p>
        </Col>
        <Col md={3}>
          <h4 className='text-white subTitle mb-3'>Langues</h4>
          <p className="text-white lang"><Image src={fr} className="flag mr-3" alt="flag icon"/>Français</p>
          <p className="text-white lang"><Image src={us} className="flag mr-3" alt="flag icon"/>Chinois</p>
          <p className="text-white lang"><Image src={cn} className="flag mr-3" alt="flag icon"/>Anglais</p>
        </Col>
        <Col md={3}>
          <h4 className='text-white subTitle mb-3'>Compétences</h4>
          <Stack direction="horizontal" gap={2} className="justify-content-left mb-4 skills">
            <Badge pill className="badge skillBg">React Native</Badge>
            <Badge pill className="badge skillBg">ReactJs</Badge>
            <Badge pill className="badge skillBg">HTML</Badge>
            <Badge pill className="badge skillBg">CSS</Badge>
            <Badge pill className="badge skillBg">Strapi</Badge>
            <Badge pill className="badge skillBg">Back4App</Badge>
            <Badge pill className="badge skillBg">REST</Badge>
            <Badge pill className="badge skillBg">NodeJs</Badge>
            <Badge pill className="badge skillBg">GIT</Badge>
            <Badge pill className="badge skillBg">Stripe</Badge>
            <Badge pill className="badge skillBg">Redux Toolkit</Badge>
            <Badge pill className="badge skillBg">Android Studio</Badge>
            <Badge pill className="badge skillBg">XCode</Badge>
            <Badge pill className="badge skillBg">MySql</Badge>
            <Badge pill className="badge skillBg">Flutter</Badge>
          </Stack>
        </Col>
      </Row>
      <Row className="footer mx-0 p-4 justify-content-center">
        <a className="footerLink" href="https://www.linkedin.com/in/zita-cheng-864891114/" target="_blank"><Image src={lkdn} className="iconSocial" /></a>
        <a className="footerLink" href="https://www.youtube.com/channel/UCohCdvYekCwfXkMXc6tt8Ag" target="_blank"><Image src={youtube} className="iconSocial" /></a>
        <a className="footerLink" href="https://github.com/zitacheng" target="_blank"><Image src={octopus} className="iconSocial" /></a>
        <a className="footerLink" href="https://www.instagram.com/yys.zita/" target="_blank"><Image src={insta} className="iconSocial" /></a>
        <a className="footerLink" href="mailto:chengxiedan@gmail.com"><Image src={email} className="iconSocial" /></a>
        <p className="text-white text-center copyright">Copyright @ 2024 Zita athomas. All rights reserved.</p>
      </Row>
    </Container>
  );
}

export default App;
