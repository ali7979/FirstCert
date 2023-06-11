import {React,useEffect} from 'react'
import { useHistory} from 'react-router-dom';
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import cmmi from 'assets/img/services/cmmi.png'
import think from 'assets/img/services/think.png'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {
  Button,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";
function Cmmi() {
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
      <Container style={{marginTop:"7em"}}>
  <Row >
    <Col md="6" className='mt-5 mb-4'>
      {/* Add your image here */}
      <img  src={cmmi} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >CMMI Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve Capability Maturity Model Integration  certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
  </Row>
<Row className='mt-md-5'>
<Col md="6" className='my-auto' data-aos="zoom-out-left">
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits of CMMI Certification</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Improved efficiency and productivity.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Higher quality products and services.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Increased customer satisfaction.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Competitive advantage.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Effective risk management.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Strong project management.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Data-driven decision making.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Engaged and empowered employees.</h5></li>

  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>International recognition.</h5></li>

</ol>


<Button color='primary'size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>
<Col md="6" data-aos="flip-down">
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"3px"}}><h6>CMMI </h6></CardSubtitle>

        <CardTitle className='text-white'><h3>CMMI Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>CMMI (Capability Maturity Model Integration) Certification is a recognition that an organization has achieved a certain level of process maturity and excellence. It signifies that the organization has implemented best practices and demonstrated its capability to consistently deliver high-quality products and services.

CMMI Certification involves a rigorous assessment of the organization's processes against the CMMI model's criteria. It evaluates the organization's adherence to industry standards and best practices for process management, project management, and engineering.</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>

</Row>
<Row className="mt-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'3px'}} >Who Can Get <span style={{fontWeight:'500'}}>CMMI CERTIFICATION?</span></h1>
  <Col md="5"className='mt-5'>
      {/* Add your image here */}
      <img   data-aos="zoom-out-down" src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>

  <Col md="7" className='my-auto blurbox' data-aos="fade-down">
    <h3 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontSize:'1.3em',fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> 
CMMI certification is open to organizations of all types and sizes, across various industries. It provides a framework for process improvement and performance excellence. Whether it's a software company, healthcare provider, or manufacturing firm, any organization can pursue CMMI certification. It helps organizations enhance their processes, achieve higher levels of performance, and deliver quality products and services.</h3>
  </Col>
</Row>


</Container>

        </div>
    </div>




      <DemoFooter/>
    </div>
  )
}




export default Cmmi
