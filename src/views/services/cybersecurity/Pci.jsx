import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import cs5 from 'assets/img/services/cs5.png'
import think from 'assets/img/services/think.png'

import { useHistory} from 'react-router-dom';


import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function Pci() {
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
      <img  src={cs5} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >PCI  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve Payment Card Industry certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3'>


  <Col md="6" className='my-auto' data-aos="zoom-out-down">
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits Of PCI DSS Compliance</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Security improvement – Reduces the risk of data breaches.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Peace of mind for you and your customers.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Boost in customer confidence, thus better customer relationship.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Increasing profits through improved brand reputation.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Compliance helps avoid expensive fines</h5></li>
</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto' data-aos="flip-up">
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >PCI</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>PCI</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>"For businesses that deal with branded debit/credit cards from the main card schemes, the Payment Card Industry Data Security Standard (PCI DSS) is a security standard for information. The Payment Card Industry Security Standards Council oversees and defines the PCI Standard on behalf of the card companies."</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>

<Row  className='mt-5'>
  <Col md="12" data-aos="flip-down">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS OF PCI DSS COMPLIANCE ?</h6></CardHeader>
  <CardBody>
      
      <CardTitle>
<h6>12 critical requirements as defined by PCI DSS as a set of security controls that organizations have to implement to protect debit and credit card data and comply with the Payment Card Industry Data Security Standard (PCI DSS). The specific requirements are defined and are managed by the Payment Card Industry (PCI) Security Standards Council. Major aspects of PCI DSS requirements are as follows:</h6>
<ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em',marginTop:'1em' }}>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Build and maintain a Secure Network.        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Install and have an updated firewall configuration to protect cardholder data.        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Never use vendor-shared defaults for system passwords and other security parameters.        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Protect Cardholder Data.        </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Secure stored cardholder data.        </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Cardholder data transmission must be encrypted across open, public networks.        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0',letterSpacing:'2px' }}>
        Maintain a Vulnerability Management Program.        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0',letterSpacing:'2px' }}>
        Antivirus software must be regularly updated     </h6>  </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0',letterSpacing:'2px' }}>
        Develop and maintain secure systems and applications   </h6>    </li>
    </ul>
</CardTitle>
     
  </CardBody>
</Card>
</Col>
</Row>
<Row className="mt-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'3px'}} >Who Should Get <span style={{fontWeight:'500'}}>PCI DSS COMPLIANCE?</span></h1>
  <Col md="5"className='mt-5'>
      {/* Add your image here */}
      <img  data-aos="fade-up" src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>

  <Col md="7" className='my-auto blurbox' data-aos="fade-down" >
    <h3 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> PCI DSS compliance is a requirement to merchants and other organizations that store, process and/or transmit cardholder data. Every payment card brand has recommended certain requirements for compliance validation and reporting. To put in simple terms, PCI Compliance is required by companies using payments cards to make online transactions secure and protect them against identity theft.</h3>
  </Col>
</Row>



</Container>

        </div>
    </div>




      <DemoFooter/>
    </div>
  )
}



export default Pci
