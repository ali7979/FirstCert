import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import cs1 from 'assets/img/services/cs1.png'

import { useHistory} from 'react-router-dom';


import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function Soc() {
  const history = useHistory();

  return (
    <div>
      <IndexNavbar/>
      <div className="main ">
      <div className="section landing-section">
      <Container style={{marginTop:"6em"}}>
  <Row >
  
 
    <Col md="6" >
      {/* Add your image here */}
      <img  src={cs1} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >SOC  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve System Organization Control in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3'>


  <Col md="6" className='my-auto'>
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Types of SOC Compliance</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>SOC 1 (SOC for Service Organizations ICFR): Report on controls of a Service Organization relevant to user entities’ Internal Control over Financial Reporting (ICFR).</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>SOC 2 (SOC for Service Organizations, Trust Services Criteria): Report on Controls of a Service Organization relevant to Security, Availability, Processing Integrity, Confidentiality and Privacy.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>SOC 3 (SOC for Service Organizations Trust Services Criteria for General Use Report): These reports are designed to meet the needs of users who need assurance about the controls of a service organization.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>SOC for Cyber Security (New): A reporting framework for communicating information about the effectiveness of cybersecurity risk management program to a broad range of stakeholders.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>SOC for Vendor Supply Chain (Under Development): An internal controls report on a vendor’s manufacturing process for customers of manufacturers and distributors to better understand the security risks in their supply chains.</h6></li>

</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto'>
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >SOC</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>SOC</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>"Through a report, SOC is intended to assist service businesses who offer their services to other entities in fostering trust and confidence in the services provided and the controls over those services.
<br/>
<h6 className='my-2'>SOC ASSURANCE REPORTING:</h6>
<ul>
<li>Type 1 (Point in time) reports cover the suitability of the design of controls as of a point in time. The Type I report is a snapshot in time.</li>
<li>Type 2 (Period of time) cover the suitability of design and operating effectiveness of controls over a period of time, typically 6 or 12 months."</li></ul></p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>

<Row  className='mt-5'>
  <Col md="12">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS SOC COMPLIANCE?</h6></CardHeader>
  <CardBody>
      <CardTitle>
 <h6>SOC has a very rigid requirement, SOC Reports are very unique to each organization. Hence, major items are listed based on:</h6>
    <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
     
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Build and maintain a Secure Network.        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        SOC 1 – Internal Control over Financial Reporting (ICFR).        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        SOC 2 – Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality and Privacy)        </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        SOC 3 – Trust Services Criteria for General Use Report.        </h6>
      </li>
     
    </ul>

</CardTitle>
     
  </CardBody>
</Card>
</Col>
</Row>




</Container>

        </div>
    </div>




      <DemoFooter/>
    </div>
  )
}



export default Soc
