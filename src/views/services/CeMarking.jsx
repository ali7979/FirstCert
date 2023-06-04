import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import ce from 'assets/img/services/ce.png'
import { useHistory} from 'react-router-dom';


import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function CeMarking() {
  const history = useHistory();

  return (
    <div>
      <IndexNavbar/>
      <div className="main ">
      <div className="section landing-section">
      <Container style={{marginTop:"8em"}}>
  <Row >
  <Col md="6" >
      {/* Add your image here */}
      <img  src={ce} alt="Your Image" style={{ maxWidth: "90%",
  height: "auto",
  
  
  }}/>
    </Col>
 
   
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >CE-Marking  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
   
    
   
  </Row>
<Row className='mt-3 mt-md-5'>


  <Col md="6" className='my-auto'>
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits of CE Marking Certification</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Implementation of internationally recognized standard.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Business Advantages - Organizations having Proper CE Mark can conduct business without facing any restrictions In EEA (European Economic Area).</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Product Reliability - The product is trusted more in the market and safer products both with respect to manufacturing and customer safety is achieved.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Compliance to regulations - Since CE Mark is the only set of regulatory process, manufacturers need not worry about too many restrictions. Applying and achieving conformity can be the one stop solution.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Self-Assessment - Since not all CE Mark certification requires Notified Body certifications, it is also possible for a few directives to be self-declared by the manufacturer for conformity.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Liability and damage claims - Since the products are CE Certified and the practice of the regulations are inculcated, damages or errors would decrease in the product and liability claims would decrease in the European market.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Free Market Access - Since CE Mark is the only certification required, nation-wise standards application is ruled out in European Free Trade Market. Any manufacturer can place his product in market with CE Marking.</h5></li>
</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto'>
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >CE MARKING</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>CE-MARKING</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>A conformity mark known as CE certification governs the sale of goods in the European Economic Area (EEA). It is a certification that states that goods adhere to the New Approach Directives of the EU. It is a condition that must be met in order to conduct business in the European markets and sell goods within the EEA. Any manufacturer or dealer who wants to sell their products in the EU must adhere to the Directives and Standards under CE, making the CE Marking Certification widely recognised.

A manufacturer can also obtain CE Marking Certification by self-evaluation by submitting a Declaration of Conformity. This declaration serves as the manufacturer's assurance that they will abide by the EU's product laws and regulations.</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>

<Row  className='mt-5'>
  <Col md="12">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS OF CE-MARKING CERTIFICATION ?</h6></CardHeader>
  <CardBody>
      <CardTitle>
      <CardTitle>
      <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
  <li>
    <h6 style={{ fontWeight: 'bold' ,margin: '0', letterSpacing: '2px' }}>
      <u>Understanding of Applicable Directives</u> - we would analyze products and classify them as per applicable directives for the product. We would also provide the applicable Harmonized Standards which regulate the product according to the norms of European Union (EU).
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      <u>Suggestion of Tests Certificates</u> - We would also suggest the applicable tests that need to be performed in order to certify the product with the applicable directives. These tests are also important in case of a few products that have stricter regulations.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      <u>CE Mark and Labelling</u> - A CE mark is attached to the product as a display of conformity of the product. It is the responsibility of the manufacturer or his representative to attest the CE Mark on the product or package before entering the market. We would guide the organization to follow rules and regulations of CE la-belling.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
     <u>Educating Customers</u>  - we believe that an implementation is complete with knowledge transfer. We would be explaining the directives, regulations, amendments and harmonized standards and their affect on certification. Knowledge on how to utilize the certification for business maximization would also be imparted.
    </h6>
  </li>
  <li>
    <h6 style={{ fontWeight: 'bold', margin: '0', letterSpacing: '2px' }}>
      <u>Declaration of Conformity </u>- DoC is essential for certification. The manufacturer must provide a Declaration of Conformity before getting certified for the product. We would assist in completion of Declaration of Conformity that needs to be provided for certification.
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




export default CeMarking
