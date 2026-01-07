import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import i18n from "i18next";
import {experiences} from './constant.js';
import www from './Assets/www.png';
import googleplay from './Assets/googleplay.webp';
import appstore from './Assets/appstore.png';
import email from './Assets/email.png';
import insta from './Assets/instagram.png';
import github from './Assets/github.png';
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
import { useTranslation } from "react-i18next";
import './i18n.js';

function App() {

  const [project, setProjet] = useState(experiences[0]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

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
              <Nav.Link className="text-center menuItem text-uppercase" href="#experience">{t('exp')}</Nav.Link>
              <Nav.Link className="text-center menuItem text-uppercase" href="#about">{t('about')}</Nav.Link>
              <Nav.Link className="text-center menuItem text-uppercase" href="#contact">{t('contact')}</Nav.Link>
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
                <h4 className="mx-auto text-center sub typewriter mt-2">{t('devMobileWeb')}</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={yosemite} text="Second slide" className="slideImg"/>
              <Carousel.Caption>
                <h1 className="mx-auto text-center title mt-4">Zita Athomas</h1>
                <h4 className="mx-auto text-center sub mt-2">{t('devMobileWeb')}</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={apple} text="Third slide" className="slideImg"/>
              <Carousel.Caption>
                <h1 className="mx-auto text-center title mt-4">Zita Athomas</h1>
                <h4 className="mx-auto text-center sub mt-2">{t('devMobileWeb')}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row id="experience" className="mx-0 my-4">
        <h1 className="mx-auto text-center title mt-4">{t('exp')}</h1>
        <h3 className="role text-center mb-4">{t(project.role)}</h3>
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
                <Col md={item.md} className="bounce-in-right">
                  <Image onLoad={() => {}} key={idx} src={item.file} className={item.md > 3 ? "mockupMac" : "mockupIphone"} />
                </Col>
                ))
            }
          </Row>
        </Col>
      </Row>
      <p className="desc text-center w-75 mx-auto mt-0">{t(project.desc)}</p>
      <Stack direction="horizontal" gap={2} className="justify-content-center mb-4">
        {
          project?.tech?.map((item, _idx) => (
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
        <h2 className="mx-auto text-center title my-4 text-white">{t('about')}</h2>
        <Col md={3} className='mt-4'>
          <Image src={zita} className="avatar" roundedCircle/>
          <h4 className='text-white bioTitle mt-3'>Zita Athomas</h4>
          <h5 className='text-white bioSub mt-3'>{t('devMobileWeb')}</h5>
          <p className='text-white bioDesc mt-4'>
            {t('bio1')}
          </p>
          <p className='text-white bioDesc mt-4'>
            {t('bio2')}
          </p>
          <p className='text-white bioDesc mt-4'>
            {t('bio3')}
          </p>
        </Col>
        <Col md={6} className='mt-4'>
            <ul>
            <li className="">
                  <div className="date">2024</div>
                  <div className="titleTime">{t('freelance')}</div>
                  <div className="descr">{t('freelanceYear')}</div>
              </li>
              <li className="">
                  <div className="date">2021</div>
                  <div className="titleTime">Akius</div>
                  <div className="descr">{t('akiusRole')}</div>
              </li>
              <li className="">
                  <div className="date">2018</div>
                  <div className="titleTime">CSULB</div>
                  <div className="descr">{t('lbYear')}</div>
              </li>
              <li className="">
                  <div className="date">2015</div>
                  <div className="titleTime">Epitech</div>
                  <div className="descr">{t('epitechM')}</div>
              </li>
              <li className="">
                  <div className="date">2014</div>
                  <div className="titleTime">{t('r&t')}</div>
                  <div className="descr">{t('discover')}</div>
              </li>
          </ul>
        </Col>
        {/* <Col className='mt-4'>
          <h4 className='text-white subTitle text-center'>Centre d'intérêts</h4>
         </Col> */}
      </Row>
      <Row id="about" className="mx-0 aboutBg px-4 mt-0 justify-content-center">
        <Col md={3}>
          <h4 className='text-white subTitle mb-3'>{t('hobbies')}</h4>
          <p className="text-white lang">{t('climb')}</p>
          <p className="text-white lang">{t('snow')}</p>
          <p className="text-white lang">{t('run')}</p>
          <p className="text-white lang">{t('travel')}</p>
        </Col>
        <Col md={3}>
          <h4 className='text-white subTitle mb-3'>{t('lang')}<span className="mini">{t('ClicktoSee')}</span></h4>
          <p className="text-white lang" onClick={() => i18n.changeLanguage('fr')}><Image src={fr} className="flag mr-3 gelatine" alt="flag icon"/>{t('fr')}</p>
          <p className="text-white lang" onClick={() => i18n.changeLanguage('cn')}><Image src={cn} className="flag mr-3 gelatine" alt="flag icon"/>{t('cn')}</p>
          <p className="text-white lang" onClick={() => i18n.changeLanguage('en')}><Image src={us} className="flag mr-3 gelatine" alt="flag icon"/>{t('en')}</p>
        </Col>
        <Col md={3}>
          <h4 className='text-white subTitle mb-3'>{t('skills')}</h4>
          <Stack direction="horizontal" gap={2} className="justify-content-left mb-4 skills">
            <Badge pill className="badge skillBg">React Native</Badge>
            <Badge pill className="badge skillBg">ReactJs</Badge>
            <Badge pill className="badge skillBg">HTML</Badge>
            <Badge pill className="badge skillBg">CSS</Badge>
            <Badge pill className="badge skillBg">Strapi</Badge>
            <Badge pill className="badge skillBg">npm</Badge>
            <Badge pill className="badge skillBg">Back4App</Badge>
            <Badge pill className="badge skillBg">REST</Badge>
            <Badge pill className="badge skillBg">NodeJs</Badge>
            <Badge pill className="badge skillBg">NextJs</Badge>
            <Badge pill className="badge skillBg">Javascript</Badge>
            <Badge pill className="badge skillBg">GIT</Badge>
            <Badge pill className="badge skillBg">Stripe</Badge>
            <Badge pill className="badge skillBg">Redux Toolkit</Badge>
            <Badge pill className="badge skillBg">Android Studio</Badge>
            <Badge pill className="badge skillBg">XCode</Badge>
            <Badge pill className="badge skillBg">MySql</Badge>
            <Badge pill className="badge skillBg">Flutter</Badge>
            <Badge pill className="badge skillBg">Wordpress</Badge>
          </Stack>
        </Col>
      </Row>
      <Row id="contact" className="mx-0 contactBg px-4 pt-4 pb-4 justify-content-center">
        <h2 className="mx-auto text-center title my-4 text-white">
          {t('contact')}
        </h2>
        <Col md={6}>
          <form
            action="mailto:chengxiedan@gmail.com"
            method="POST"
            encType="text/plain"
          >
            {/* Name */}
            <div className="mb-3">
              <label className="text-white mb-1">
                {t('name')}
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="text-white mb-1">
                {t('email')}
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="text-white mb-1">
                {t('message')}
              </label>
              <textarea
                name="message"
                rows="5"
                className="form-control"
                required
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button type="submit" className="btn btn-light px-4">
                {t('send')}
              </button>
            </div>
          </form>
        </Col>
      </Row>
      <Row className="footer mx-0 p-4 justify-content-center">
        <a className="footerLink" href="https://www.linkedin.com/in/zita-cheng-864891114/" target="_blank"><Image src={lkdn} className="iconSocial" /></a>
        <a className="footerLink" href="https://www.youtube.com/channel/UCohCdvYekCwfXkMXc6tt8Ag" target="_blank"><Image src={youtube} className="iconSocial" /></a>
        <a className="footerLink" href="https://github.com/zitacheng" target="_blank"><Image src={github} className="iconSocial" /></a>
        <a className="footerLink" href="https://www.instagram.com/yys.zita/" target="_blank"><Image src={insta} className="iconSocial" /></a>
        <a className="footerLink" href="mailto:chengxiedan@gmail.com"><Image src={email} className="iconSocial" /></a>
        <p className="text-white text-center copyright">Copyright @ 2024 Zita athomas. All rights reserved.</p>
      </Row>
    </Container>
  )
}

export default App;
