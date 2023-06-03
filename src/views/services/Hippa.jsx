  import React from 'react'
  import IndexNavbar from 'components/Navbars/IndexNavbar'
  import DemoFooter from 'components/Footers/DemoFooter'
  import hipaa from 'assets/img/services/hipaa.png'
  import { useHistory} from 'react-router-dom';

  import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
  
  import {
    Button,
    Container,
    Row,
    Col
  } from "reactstrap";
  function Hippa() {
    const history = useHistory();

    return (
      <div>
        <IndexNavbar/>
        <div className="main ">
        <div className="section landing-section">
        <Container style={{marginTop:"7em"}}>
    <Row >
    
   
      <Col md="6" >
        {/* Add your image here */}
        <img  src={hipaa} alt="Your Image" style={{ maxWidth: "100%",
    height: "auto"}}/>
      </Col>
      <Col md="6" className='my-auto'>
        <h1 className="text-left " style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >HIPAA Compliance Certifications</h1>
        <p style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
        <Button color='primary' size="lg" className=" mt-3  btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

      </Col>
      
     
    </Row>
  <Row className='mt-md-5'>

  <Col md="6" className='my-auto'>
  <Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
      <CardBody>
      <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >HIPAA</h6></CardSubtitle>
  
          <h3 className='text-white'><span style={{letterSpacing:'4px',fontWeight:'400'}}>HIPAA</span> Apply In Various</h3>
          <h3 className='text-white' style={{fontWeight:800,marginTop:0}}>"Companies"</h3>
          <hr className="divider-line" />
          <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>"The United States' Health Insurance Portability and Accountability Act of 1996 contains data privacy and security safeguards for protecting medical information. After that, it was changed in 2009 to become the Hitech Act and again in 2013 to become the Omnibus Rule. By lowering costs, easing administrative burdens, and enhancing the privacy and security of Protected Health Information, HIPAA sought to transform the healthcare sector (PHI). According to their merits, those who comply with the law's standards may receive a HIPAA Compliance Certification." </p></CardSubtitle>
  
      </CardBody>
  </Card>
    </Col>
    <Col md="6" className='my-auto'>
  <h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Customers</h1>
  
  <ol style={{lineHeight: "1", margin: "0"}}>
    <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Requires the organization to have a data backup plan in place & share a copy on request.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Increases personal privacy in health-care information and decision-making.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Protection against malicious software & reduces the risk of hacking PHI.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Has created a brand-new industry to support medical professionals.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Streamlining of processes through iterations and system audits.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Physical security is a key area enforced for medical providers.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Prevents any form of discrimination in the medical sector.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Reduction in the number of medical record errors.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Business opportunities through compliance.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Assigns role-based security of PHI.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Control on copies of medical data.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Notification of Data Breaches.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Security of Health Data.</h5></li>
    <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Privacy of Health Data.</h5></li>
</ol>




  
  
  <Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>
  
  </Col>
  </Row>

<Row  className='mt-5'>
    <Col md="12">
<Card>
    <CardHeader style={{backgroundColor:'#159895',color:'white'}}><h6>WHO NEEDS TO COMPLY WITH HIPAA CHECKLIST ?</h6></CardHeader>
    <CardBody>
        <CardTitle><h5 style={{fontWeight:'400'}}>Any organization or individual who works in or with the healthcare industry or who has access to Protected Health Information (PHI) of US individuals – broadly classified as Covered Entities, Business Associates & Sub-Contractors. This includes:</h5></CardTitle>
      
           <ul style={{lineHeight: "1", margin: "0", fontSize:'1.5em'}}>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
Principles of HACCP - There are 7 principles of HACCP. Implementation of these principles is very important to have an effective system.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
Identification of the Hazard – It is very crucial to recognize hazards and classify these hazards into Physical, Biological, and Chemical hazards. This will help us to understand the priority and impact of the hazard.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
Critical Control Points – Analysis of the controls required in measurable terms with defining of maximum and minimum levels of acceptance.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
HACCP Plan - The 12 steps of HACCP are required to be implemented as a part of the plan. Recognition of leaders to do the same is also crucial.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
PRP and OPRP - The controls which are required and the extent to which the control is required must be understood and implemented. Risk calculation to be carried out based on the classification of hazards and priority of its impact.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
Traceability - Traceability of any product in the food lifecycle to its very start and to understand the hazard generation point and to rectify issues is very critical.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
Integration with various international Standards - HACCP is a basic platform for various international standard under Codex Alimentarius.</h6></li>
</ul>
    </CardBody>
</Card>
</Col>
</Row>

  <Row className="my-3 mx-auto" > 
  
  <Col md="10 mx-auto" className='mt-5'>
<Card>
    <CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS OF HIPAA COMPLIANCE CERTIFICATION ?</h6></CardHeader>
    <CardBody>
        <CardTitle><h5 style={{fontWeight:'400'}}><ul style={{lineHeight: "1", margin: "0", fontSize:'1.5em'}}>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
  Privacy & Security of PHI, e-PHI & organizational information with regards to data processing.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
  HIPAA Risk Analysis & Management.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
  Administrative, Physical & Technical Safeguards.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
  HIPAA Policy, Procedure & Documentation requirements.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
  Review of process, policy, document & updates on state law.</h6></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h6 style={{fontWeight:'400', margin: "0"}}>
  Training & Awareness for the use of PHI.</h6></li>
</ul></h5></CardTitle>
        <CardText>
        </CardText>
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
  
  

export default Hippa
