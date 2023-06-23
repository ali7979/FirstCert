import React, { useEffect } from 'react'

import grad from "assets/img/services/wave.svg";
import i1 from "assets/img/quality1.png";
import i3 from "assets/img/services/hipaa.png";
import i4 from "assets/img/services/eating chocolate-rafiki.png";
import i5 from "assets/img/services/5.png";
import i6 from "assets/img/services/6.png";
import i7 from "assets/img/services/cyber security.png";

import 'aos/dist/aos.css'
import { Card, CardBody, CardText, Col } from "reactstrap";

import { CardImg, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
function Services() {
 
  return (
    <div>

      <h1
        style={{
          fontStyle: "'Raleway', sans-serif",
          fontWeight: "400",
          color: "#51cbce",
        }}
        className="text-center my-2"
      >
        Our Services
      </h1>

      <Container
        className="mb-4"
        fluid
        style={{
          backgroundImage: `url(${grad})`,
          backgroundPosition: "center",
          backgroundRepeat: "none",
          backgroundSize: "cover",
          borderTopLeftRadius: "30rem 25rem",
          borderBottomRightRadius: "40rem 25rem",
        }}
      >
        <Row className="mx-auto  justify-content-center" data-aos="fade-up">
          <Card
            className="blurbox m-5"
            style={{
              width: "20rem",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardImg top loading="lazy"  src={i1} alt="Quality Certification" />
            <div className="card-label">Quality</div>
            <CardBody  data-aos="zoom-in">
            
                <ul>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./quality"
                    >
                      ISO 9001{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./cmmi"
                    >
                      CMMI{" "}
                    </Link>
                  </li>
                </ul>
              
            </CardBody>
          </Card>

          <Card
            className="blurbox m-5"
            style={{
              width: "20rem",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardImg loading="lazy"  top src={i6} alt="Environment Certification" />
            <div className="card-label">Environment</div>
            <CardBody  data-aos="zoom-in">
            
                <ul>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./environment"
                    >
                      ISO 14001
                    </Link>
                  </li>
                </ul>
              
            </CardBody>
          </Card>
          <Card
            className="blurbox m-5 "
            style={{
              width: "20rem",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardImg loading="lazy"  top src={i3} alt="Health & Safety Certification" />
            <div className="card-label">Health & Safety</div>
            <CardBody  data-aos="zoom-in">
              
                <ul>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./iso45001"
                    >
                      ISO 45001
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./hipaa"
                    >
                      HIPAA
                    </Link>
                  </li>
                </ul>
              
            </CardBody>
          </Card>
        </Row>
        <Row className="mx-auto justify-content-center" data-aos="fade-up">
          <Card
            className="blurbox m-5"
            style={{
              width: "20rem",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardImg loading="lazy"  top src={i4} alt="Food Safety Certification" />
            <div className="card-label">Food Safety</div>
            <CardBody data-aos="zoom-in">
            
                <ul>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./halal"
                    >
                      Halal
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./haccp"
                    >
                      HACCP
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./iso22000"
                    >
                      ISO 22000
                    </Link>
                  </li>
                </ul>
              
            </CardBody>
          </Card>

          <Card
            className="blurbox m-5"
            style={{
              width: "20rem",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardImg loading="lazy"  top src={i7} alt="Cyber Security Certification" />
            <div className="card-label">Cyber Security</div>
            <CardBody data-aos="zoom-in">
              
                <Row>
                  <Col md="6">
                    <ul>
                      <li><Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "1px",
                        color: "black",
                      }}
                      to="./iso27001"
                    >ISO 27001</Link></li>
                      <li>
                      <Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./gdpr"
                    >GDPR</Link></li>
                      <li><Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./pci"
                    >PCI</Link></li>
                    </ul>
                  </Col>
                  <Col md="6">
                    <ul>
                      <li><Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./soc"
                    >SOC</Link></li>
                      <li><Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./vapt"
                    >VAPT</Link></li>
                    </ul>
                  </Col>
                </Row>
              
            </CardBody>
          </Card>
          <Card
            className="blurbox m-5"
            style={{
              width: "20rem",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardImg loading="lazy"  top src={i5} alt="Product Certification" />
            <div className="card-label">Product Certification</div>
            <CardBody data-aos="zoom-in">
              
                <ul>
                  <li><Link
                      style={{
                        fontWeight: "bold",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "2px",
                        color: "black",
                      }}
                      to="./cemarking"
                    >CE Marking</Link></li>
                </ul>
              
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
