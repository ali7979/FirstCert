import {React,useEffect} from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import iso22000 from 'assets/img/services/iso22000 (2).png'
import { useHistory} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { Card, CardHeader,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function Iso22000() {
  const history = useHistory();
  useEffect(()=>
  {
    Aos.init();
  },[])
  return (
    <div>
      <IndexNavbar/>
      <div className="main ">
      <div className="section landing-section">
      <Container style={{marginTop:"4em"}}>
  <Row >
  
 
    <Col md="6" >
      {/* Add your image here */}
      <img  src={iso22000} alt="iso22000 certification" style={{ maxWidth: "100%",
  height: "auto",  transition: "transform 0.3s ease-in-out",
}}
onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >ISO 22000 Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3 mt-md-5'>


  <Col md="6" className='my-auto' data-aos="zoom-out-left">
<h2 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Organization</h2>

<ol style={{lineHeight: "1", margin: "0", paddingLeft: "20px"}}>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400',marginTop:'1em'}}>Continued Improvement – Enhanced system due to internal audits and better control of hazards.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Hazard Management – Identification, control measures, and reduced risks and impacts.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Covers other Management Systems – FSSC 22000, BRC requirements are achievable.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Promote international trade – Enhanced reach and recognition in the international market.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Equipped for regulatory changes – Basic compliance for various standards are achieved.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Controlled Supplier or Vendor Management – Boost confidence of suppliers.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Better Management of Risks – Reduced incidents and complication.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Facilitated Market Growth – Increased reach in terms of customers.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Competitive advantage in the marketplace with this certification.</h5></li>
  <li style={{fontWeight:'bold'}}><h5 style={{fontWeight:'400'}}>Resource Optimization – Internally and along the food chain.</h5></li>
</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto' data-aos="flip-down">
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >ISO 22000</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>ISO 22000</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>"An international standard for food safety management systems is ISO 22000:2018. This aids in reducing food-related risks. From farm to fork, the Standard aids in maintaining overall food safety. The dangers connected with food safety are the main emphasis of ISO 22000 Certification. The Deming cycle and HACCP are essential components of this certification. The standard also employs controlled food chain techniques and a Quality Management System methodology to guarantee safe food products"</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>

<Row  className='mt-5' data-aos="flip-up">
  <Col md="12">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>BENEFITS OF IS0 22000 TO YOUR CUSTOMERS</h6></CardHeader>
  <CardBody>
      <CardTitle>
      <CardTitle>
      <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
    <li>
      <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Regulatory Requirements – To ensure all regulatory requirements are met by the supplier.
      </h6>
    </li>
    <li>
      <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Risk management – The risks related to food are managed appropriately by the supplier.
      </h6>
    </li>
    <li>
      <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Safety – Safe and clean food. Any customer is assured of a safe and clean product.
      </h6>
    </li>
    <li>
      <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Trace-ability – Ensures the supplier has good Supply Chain Management.
      </h6>
    </li>
    <li>
      <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        Trusted supplier – The supplier is stable and the supply chain is constant.
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



export default Iso22000
