import DemoFooter from 'components/Footers/DemoFooter'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import aboutus from '../../assets/img/about us.png'
import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

function AboutUs() {
  useEffect(()=>
  {
    Aos.init();
  },[])
  return (
    <div>
      <IndexNavbar/>
      <div className="section landing-section">
      <Container style={{marginTop:"6em"}}>
  <Row className='mt-4'>
    <Col md="6" data-aos="zoom-in-down" >
      {
      <img  loading="lazy"  src={aboutus} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/> }
    </Col>
    <Col md="6" data-aos="zoom-out-down">
    <h1 style={{fontFamily: "'Raleway', sans-serif",letterSpacing:"2px",fontWeight:"600",color:"#51cbce"}}>About FirstCert</h1>
      <h4 className='text-middle ' style={{letterSpacing:"0.8px",fontWeight:"400"}}>
      Firstcert is a management consulting and certification company that provides the corporation with worldwide quality standards. We are available anywhere to assist our clients in obtaining certification. Firstcert is committed to offering top-notch services together with the necessary support and direction. Our skills in management consulting, auditing, and numerous ISO standards, including CMMI, GDPR, HIPAA, SOC, PCI DSS,CE Marking and ISO 9001, ISO 27001, ISO 45001, ISO 14001, ISO 20000, and ISO 22000.
<br/>
 
                </h4>
    </Col>
    <h5 className='text-center mt-5' data-aos="zoom-out-down" style={{letterSpacing:"0.8px",fontWeight:"400"}}>Our staff of consultants and auditors has years of experience in this industry, and they provide results with minimal effort and straightforward documentation.We offer best-in-class industry proposals that are suitable and simple to execute and are based on benchmarked and model-based industry practice.Customers take use of our service offering for cost optimization and cycle time savings.We offer managed services and complete service delivery for various GRC and technology solution sectors.For all of our clients, we are proactive, value-adding service partners.Utilize existing high-quality vectors with enterprise-wide innovation with enthusiasm. Utilize e-business collaboration and idea sharing to phosphorescently leverage others' innovative thinking across the entire organization. Utilize additional resource-leveling convergence proactively as opposed to inter-mandated networks.</h5>
  </Row>
</Container>

        </div>
      <DemoFooter/>
    </div>
  )
}

export default AboutUs
