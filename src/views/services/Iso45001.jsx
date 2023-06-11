import {React,useEffect} from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import iso from 'assets/img/services/iso95001.png'
import think from 'assets/img/services/think.png'
import { useHistory} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
function Iso45001() {
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
      <Container style={{marginTop:"7em"}}>
  <Row >
  
    
    <Col md="6" >
      {/* Add your image here */}
      <img  src={iso} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >ISO 45001 Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
   
  </Row>
<Row className='mt-md-5'>

<Col md="6" data-aos="zoom-out-left" >
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Customers</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Improves the corporate image of the organization and provides exposure to elite management working modules.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Involvement of the workforce with awareness enhances the efficiency of the organization due to Best Practices.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Identification of Hazards and Risks equips the organization to handle them with a preventive approach.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Enhanced supply chain provides the consistency required to conduct business without obstacles.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Responsive management towards legal and regulatory requirements of government and customers.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Reduces insurance premiums by implementing the required control at required stages.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Integration of ISO 45001 Certification with other ISO Services.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Decrease in incidents that hamper business consistency.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Transforms the process from detection to prevention module.</h5></li>
</ol>


<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>
<Col md="6" className='my-auto'>
<Card   data-aos="flip-down" className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"3px"}}><h6>ISO 45001</h6></CardSubtitle>

        <CardTitle className='text-white'><h3>ISO Standards Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>The guidelines that specify what an Occupational Health & Safety Management System must do. The standard is based on OHSAS 18001 and ISO 9001 standards, which integrate the global management system requirements with the essential needs of creating a favourable workplace environment where the priority of the workforce's health and safety is provided with integration of quality. </p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>
<Row className="my-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'1px'}} >Who Can Get <span style={{fontWeight:'500'}}>ISO 45001 CERTIFICATION?</span></h1>
<Col md="5">
      {/* Add your image here */}
      <img data-aos="zoom-out-down" src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>
<Col md="7" className='mt-5'  data-aos="fade-down" >
    <h5 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> The guidelines that specify what an Occupational Health and Safety Management System must do. The requirement is based on the combination of the OHSAS 18001 and ISO 9001 standards. Any organisation, regardless of size, location, or industry can become certified to ISO 45001. To improve Occupational Health and Safety requirements, many industries in manufacturing, services, mining, and food processing choose ISO 45001 Certification. This certification system would be necessary for any industry looking to increase labour participation and knowledge. Obtaining ISO 45001 Certification is indicated for firms that like to train their staff members in operational risk identification and mitigation.</h5>
  </Col>
 
  

  
</Row>


</Container>

        </div>
    </div>




      <DemoFooter/>
    </div>
  )
}

export default Iso45001

