import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import halal from "assets/img/services/halal.png";
import think from "assets/img/services/think.png";
import { useHistory} from 'react-router-dom';


import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,

} from "reactstrap";

import { Button, CardHeader, Container, Row, Col } from "reactstrap";
function Halal() {
  const history = useHistory();

  return (
    <div>
      <IndexNavbar />
      <div className="main ">
        <div className="section landing-section">
          <Container style={{ marginTop: "4em" }}>
            <Row>
              <Col md="6" className="mt-5">
                {/* Add your image here */}
                <img
                  src={halal}
                  alt="Your Image"
                  style={{ maxWidth: "90%", maxHeight: "90%", height: "auto" }}
                />
              </Col>
              <Col md="6" className="my-auto">
                <h1
                  className="text-left ml-md-5"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: "900",
                  }}
                >
                  Halal Islamic Food Certification
                </h1>
                <p className=" ml-md-5" style={{ fontWeight: "400" }}>
                  Achieve this certification in a hassle-free
                  approach.Simpler,Faster and Affordable
                </p>
                <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

              </Col>
            </Row>
            <Row className="mt-md-5">
              <Col md="6" className="my-auto">
                <h1
                  style={{
                    fontWeight: "bold",
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  Benefits to your Customers
                </h1>

                <ol style={{ lineHeight: "1", margin: "0" }}>
                  <li
                    className="mt-2"
                    style={{ fontWeight: "bold", margin: "0" }}
                  >
                    <h5 style={{ fontWeight: "400", margin: "0" }}>
                      Integrity and ethical way of life by avoiding cruelty to
                      animals, harm to the environment and unfair business
                      practices.
                    </h5>
                  </li>
                  <li style={{ fontWeight: "bold", margin: "0" }}>
                    <h5 style={{ fontWeight: "400", margin: "0" }}>
                      Providing quality system and good practices for creating a
                      trusted reputation with their customers.
                    </h5>
                  </li>
                  <li style={{ fontWeight: "bold", margin: "0" }}>
                    <h5 style={{ fontWeight: "400", margin: "0" }}>
                      Boosts other supporting standards such as HACCP and Good
                      Manufacturing Practice (GMP).
                    </h5>
                  </li>
                  <li style={{ fontWeight: "bold", margin: "0" }}>
                    <h5 style={{ fontWeight: "400", margin: "0" }}>
                      A platform to penetrate international markets.
                    </h5>
                  </li>
                  <li style={{ fontWeight: "bold", margin: "0" }}>
                    <h5 style={{ fontWeight: "400", margin: "0" }}>
                      Lawful food according to Islamic dietary guidelines.
                    </h5>
                  </li>
                  <li style={{ fontWeight: "bold", margin: "0" }}>
                    <h5 style={{ fontWeight: "400", margin: "0" }}>
                      Legal implications.
                    </h5>
                  </li>
                </ol>

                <Button color="primary" size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>
                  Enquire Now
                </Button>
              </Col>
              <Col md="6">
                <Card
                  className="mx-md-auto my-md-auto"
                  style={{
                    background: "#1A5F7A",
                    width: "30em",
                    height: "auto",
                  }}
                >
                  <CardBody>
                    <CardSubtitle
                      className="mt-2 text-white"
                      style={{ letterSpacing: "5px" }}
                    >
                      <h6>HALAL</h6>
                    </CardSubtitle>

                    <CardTitle className="text-white">
                      <h3>
                        <span
                          style={{ letterSpacing: "4px", fontWeight: "400" }}
                        >
                          HALAL
                        </span>{" "}
                        Apply In Various
                      </h3>
                    </CardTitle>
                    <CardText className="text-white ">
                      <h3 style={{ fontWeight: 800, marginTop: 0 }}>
                        "Companies"
                      </h3>
                    </CardText>
                    <hr className="divider-line" />
                    <CardSubtitle className="mt-md-5 mt-sx-2 text-white">
                      <p>
                        All Muslim consumers have the certainty that the food
                        has been prepared in accordance with Islamic law thanks
                        to Halal Certification, which comes from the Arabic word
                        halal, which means "Lawful" or "Permitted" (Sharia). The
                        food items that Muslim communities regularly consume are
                        in accordance with the technique and procedure as
                        established by Islamic law, and they also guarantee
                        quality and are wholesome. Additionally, CertPro would
                        provide instructions that must be adhered to by the food
                        manufacturer or processor in order to construct the
                        halal procedure. Despite being appropriate to the meat
                        industry, the accreditation is also valid for businesses
                        that process milk, canned goods, and additives. For
                        Halal Certification , a few conditions must be met.The
                        certification would assist the Muslim Community in
                        identifying food products that are appropriate .{" "}
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              {" "}
              <h1 style={{ letterSpacing: "2px", wordSpacing: "3px" }}>
                Who Can Get{" "}
                <span style={{ fontWeight: "500" }}>HALAL CERTIFICATION?</span>
              </h1>
              <Col md="5" className="mt-5">
                {/* Add your image here */}
                <img
                  src={think}
                  alt="Your Image"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Col>
              <Col md="7" className="my-auto blurbox">
                <h3
                  className="text-left"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    wordSpacing: "4px",
                  }}
                >
                  <ol style={{ lineHeight: "2" }}>
                    <li className="mt-2" style={{ fontWeight: "bold" }}>
                      Food processing industry
                    </li>
                    <li style={{ fontWeight: "bold" }}>
                      Meat slaughtering houses
                    </li>
                    <li style={{ fontWeight: "bold", margin: "0" }}>
                      Restaurants and kitchens
                    </li>
                    <li style={{ fontWeight: "bold", margin: "0" }}>
                      Dairy industry
                    </li>
                  </ol>
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Row className="my-3 mx-auto">
        <Col md="10 mx-auto" className="mt-5">
          <Card>
            <CardHeader style={{ backgroundColor: "#1A5F7A", color: "white" }}>
              <h6>
                WHAT ARE THE REQUIREMENTS OF HIPAA COMPLIANCE CERTIFICATION ?
              </h6>
            </CardHeader>
            <CardBody>
              <CardTitle>
                <h5 style={{ fontWeight: "400" }}>
                  <ul
                    style={{ lineHeight: "1", margin: "0", fontSize: "1.5em" }}
                  >
                    <li style={{ fontWeight: "bold", margin: "0" }}>
                      <h6  style={{ fontWeight: "bold", margin: "0" }}>
                        Resource management – General, Personnel, Facilities and
                        Environments condition and Equipment's (Cutleries).
                      </h6 >
                    </li>
                    <li style={{ fontWeight: "bold", margin: "0" }}>
                      <h6 style={{ fontWeight: "bold", margin: "0" }}>
                        Process Requirements – Preparation, Processing,
                        Packaging, Transportation, and Storages.
                      </h6>
                    </li>
                    <li style={{ fontWeight: "bold", margin: "0" }}>
                      <h6 style={{ fontWeight: "bold", margin: "0" }}>
                        Muslim personnel certified under Islamic slaughtering
                        procedures.
                      </h6>
                    </li>
                    <li style={{ fontWeight: "bold", margin: "0" }}>
                      <h6 style={{ fontWeight: "bold", margin: "0" }}>
                        Interested parties and stakeholders.
                      </h6>
                    </li>
                  </ul>
                </h5>
              </CardTitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <DemoFooter />
    </div>
  );
}

export default Halal;
