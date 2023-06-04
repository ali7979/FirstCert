import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import cs2 from 'assets/img/services/cs2.png'
import think from 'assets/img/services/think.png'

import { useHistory} from 'react-router-dom';


import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function Vapt() {
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
      <img  src={cs2} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >VAPT  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve Vulnerability Assessment And Penetration Testing Certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3'>


  <Col md="6" className='my-auto'>
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}> Benefits Of VAPT Certification</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Gives an organization a detailed view of the threats facing its applications, enabling the business to better protect its systems and data from malicious attacks.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Provides enterprises with a more comprehensive application evaluation than any single test alone.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Vulnerabilities can be found in applications from third-party vendors and internally made software, but most of these flaws are easily fixed once found.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Single document to present the technical strength of the organization</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Improving the organization technical security with the regular assessment.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>A trust document towards the customers & prospective clients.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Helps in fixing a product’s security design issues.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Protection from the loss of reputation & money.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'700'}}>Helps to comply with several security standards such as ISMS, PCI DSS, SOC, HITRUST etc.</h6></li>


</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto'>
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >VAPT</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>VAPT</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>A technical method to remedy security gaps in an organization's IT infrastructure is VAPT certification (application, software system, network etc.). The process of vulnerability assessment involves identifying with the aim of not missing any gaps. A penetration test will be performed based on the severity of the Vulnerability Assessment findings. A penetration test is a method for exploring and exploiting vulnerabilities in-depth. This technique both establishes the existence of the vulnerability and shows that harm to the application or network could result from its exploitation. The PT process is generally intrusive and can harm the systems; screen-shots or logs are taken as proof of this, which further helps with remediation.

<br/>
<h6 className='my-2'>Process methodology would be:</h6>
<ol>
<li>Scanning the network or application</li>
<li>Searching for security flaws</li>
<li>Exploiting the security flaws</li>
<li>Report generation on risk, severity & probability</li>
<li>Reassessing the system</li>
<li>Final report</li>
</ol></p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>

<Row  className='mt-5'>
  <Col md="12">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT IS THE METHODOLOGY FOR VAPT CERTIFICATION ?</h6></CardHeader>
  <CardBody>
      <CardTitle>
    <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
     
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Goals & Objectives: Defines the objective of the assessment.      </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Scope: Scope of the test to be defined & area of assessment to be clearly defined.  </h6>    </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Three possible scopes exist:
        <ul>
<li>Black box testing: Testing from the external network without the knowledge of the internal networks & the system.</li>Black box testing: Testing from the external network without the knowledge of the internal networks & the system.
<li>Grey box testing: Testing can be done either by external or internal networks, with the knowledge on internal network and system.</li>
<li>White box testing: Testing from the internal network with the knowledge of the internal network & the system.</li></ul></h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Information Gathering: Collection of information about the IT Infrastructure such as network, IP addresses, operating system versions, no. of users, applications used, etc.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Vulnerability Detection: Vulnerability scanners used to identify the vulnerability of the IT Infrastructure.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Information Analysis and Planning: Analysis of the identified vulnerabilities, to devise a plan for penetrating into the network and systems.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Attack & Penetration: Exploit the identified vulnerabilities.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Privilege Escalation: An attempt is made to increase the access using higher privileges, which includes root or administrative access to the system.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Result Analysis & Reporting: Analysis of threats & determining the root cause analysis with suitable outcomes to ensure the security of the system.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Clean up: It is an important step to revert any changes done during the assessment. Therefore, cleanup ensures that the files are restored back to the state they were before testing.
       </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Reassessing: Reassessment of the network & the system to check if everything is secure finally.
       </h6>
      </li>
    </ul>

</CardTitle>
     
  </CardBody>
</Card>
</Col>
</Row>

<Row className="mt-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'3px'}} >Who Can Get <span style={{fontWeight:'500'}}>VAPT CERTIFICATION?</span></h1>
  <Col md="5"className='mt-5'>
      {/* Add your image here */}
      <img  src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>

  <Col md="7" className='my-auto blurbox' >
    <h3 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px',fontSize:'1.5em'}}>VAPT is a test conducted to discover threats in IT infrastructure of organizations by security experts. It is not only restricted to companies which work on software development; it is also applicable to companies working on customer data & dealing with the confidential data on systems where networks, applications, software, etc. are used.</h3></Col>
</Row>


</Container>

        </div>
    </div>




      <DemoFooter/>
    </div>
  )
}



export default Vapt
