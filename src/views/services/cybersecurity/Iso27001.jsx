import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import think from 'assets/img/services/think.png'
import cs3 from 'assets/img/services/cs3.png'


import { useHistory} from 'react-router-dom';


import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function Iso27001() {
  const history = useHistory();

  return (
    <div>
      <IndexNavbar/>
      <div className="main ">
      <div className="section landing-section">
      <Container style={{marginTop:"6em"}}>
  <Row >
  
 
    <Col md="6" >
     
      <img  src={cs3} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >ISO 27001  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3'>


  <Col md="6" className='my-auto'>
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Organization</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Implementation of internationally recognized standard.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Build trust with customers.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Cost reduction.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Enhanced business recovery.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Increased information security commitment.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Competitive advantage in tenders.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Confidence in security arrangements.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Improved customer and partner confidence.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Cost savings through reduced incidents.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Meet customer and tender requirements.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Compliance with laws and regulations.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Opportunity to be a preferred supplier.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Minimized staff-related security breaches.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Enhanced breach control.</h5>
  </li>
  <li style={{fontWeight: "bold", margin: "0"}}>
    <h5 style={{fontWeight: "400", margin: "0"}}>Increased business resilience.</h5>
  </li>
</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto'>
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >27001</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>27001</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>"Information Security Management System, also known as ISO 27001 Certification, is a popular management solution that adheres to a specified standard for information security. All legal, physical, administrative, and technical controls involved in an organization's information risk management operations are included in the ISMS framework of policies and procedures."</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>


<Row className="mt-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'2px'}} >Who Can Get <span style={{fontWeight:'500'}}>ISO 27001 CERTIFICATION?</span></h1>
  <Col md="5"className='mt-5'>
      {/* Add your image here */}
      <img  src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>

  <Col md="7" className='my-auto blurbox' >
    <h3 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> The majority of sectors where information or data is an asset can use the standard. Software development, Cloud & IT support (product & service firms), financial industries, telecom industries, pharmaceutical, health organisations, and government bodies are among the businesses choosing ISO 27001:2022, according to a market survey.</h3>
  </Col>
</Row>


<Row  className='mt-5'>
  <Col md="12">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS OF ISO 27001 CERTIFICATION ?</h6></CardHeader>
  <CardBody>
      <CardTitle>
      <CardTitle>
      <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Secured acquisition, development & support functions, Vendor Management – security on third-party supplies & services, Incident Management, Business Continuity/Disaster Recovery.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Defining of Statement of Applicability (SOA): Physical controls, Procedural Controls, Technical Controls, Legal & Regulatory or Compliance Controls.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Physical Controls, Administrative Controls & Technical Controls.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Measuring & monitoring effectiveness of controls.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Management Reviews.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Training & Communication.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Classification of Information.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Policy & Procedure.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Organization Commitment.
    </h6>
  </li>
</ul>

</CardTitle>
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



export default Iso27001
