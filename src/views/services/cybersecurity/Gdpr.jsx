import React, { useEffect } from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import cs4 from 'assets/img/services/cs4.png'
import think from 'assets/img/services/think.png'

import { useHistory} from 'react-router-dom';


import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import Aos from 'aos';
import 'aos/dist/aos.css'

function Gdpr() {
  useEffect(()=>
  {
    Aos.init();
  },[])
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
      <img  src={cs4} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >GDPR  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3'>


  <Col md="6" className='my-auto' data-aos="zoom-out-up">
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits Of GDPR Certification</h1>

<ol style={{ lineHeight: "1", margin: "0" }}>
 
  
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      New rules & rights for individuals/data subjects (consents, data deletion, privacy policy, etc.).
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Transparency with interested parties on the use of personal data processing.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      The opportunity for customer retention and confidence in EU & EEA regions.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Better data security practices.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Opportunity to learn & implement new technology.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Secured mode of data storage & transfer.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Outward business development approach.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Streamlined client support approach.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Better handling of personal information of individuals.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      Imposing data minimization on all business processes.
    </h5>
  </li>
  <li style={{ fontWeight: "bold", margin: "0" }}>
    <h5 style={{ fontWeight: '400', margin: "0" }}>
      New job opportunities for DPO & other security roles.
    </h5>
  </li>
</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto'data-aos="flip-up">
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >GDPR</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>GDPR</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2  text-white" ><p>General Data Protection Rule (GDPR Certification) is a regulation in EU Law (EU) 2016/679 on data protection & privacy of individual citizens' Personal Data (PII) of the European Union (EU) and European Economic Area (EEA). It also holds true for outsourcing this data outside of the EU and EEA.</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>
<Row className="mt-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'3px'}} >WHO SHOULD BE  <span style={{fontWeight:'500'}}>GDPR COMPLIANT ?</span></h1>
  <Col md="5"className='mt-2'>
      {/* Add your image here */}
      <img  data-aos="zoom-out-down" src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>

  <Col md="7" className='my-auto blurbox' data-aos="fade-down" >
    <h3 className='text-center ' style={{fontSize:'1.4em',fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> The regulation applies to the processing of Personal Data in the European Union. This regulation applies to the processing of personal data in the context of the activities carried out by an establishment; either in the capacity of a controller or a processor, or both, in the European Union, regardless of whether the processing takes place within EU-EEA or out of it. To simply: 1. Firms located in the EU-EEA 2. Firms not located in the EU-EEA, if they offer free or paid goods or services to EU residents or monitor the behavior of EU residents</h3>
  </Col>
</Row>
<Row  className='mt-5'>
  <Col md="12" data-aos="flip-down">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS OF GDPR COMPLIANT CERTIFICATION ?</h6></CardHeader>
  <CardBody>
      <CardTitle>
      <CardTitle>
      <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Lawfulness, fairness & transparency to Data Subjects.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Limitation of purpose, data, and storage.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Data Subject rights.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Consents.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Legitimate Interests Assessment (LIA).
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Personal Data breaches.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Privacy by Design.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Data Protection Impact Assessment (DPIA).
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Data storage & transfers.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Data Protection Officer.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Checks on processing activities and personal data inventory.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Checks on privacy policies and privacy notices.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Embed data privacy into operations.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Checks on training and awareness programs.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Checks on information security risks.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Checks on third-party risks related to Personal Data.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      Checks on Data Subject Access Request (DSAR).
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



export default Gdpr
