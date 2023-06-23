import {React,useEffect} from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import S14001 from 'assets/img/services/iso.png'
import think from 'assets/img/services/think.png'
import grad from 'assets/img/services/wave.svg'
import i1 from 'assets/img/services/1.png'
import i11 from 'assets/img/services/i11.png'
import i12 from 'assets/img/services/i12.png'
import i13 from 'assets/img/services/i13.png'
import i14 from 'assets/img/services/i14.png'
import i5 from 'assets/img/services/5.png'
import { useHistory} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";
function Environment() {
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
 
    
    <Col md="6" >
      {/* Add your image here */}
      <img  src={S14001} alt="iso14001 certification" style={{ maxWidth: "100%",
  height: "auto",  transition: "transform 0.3s ease-in-out",
}}
onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >ISO 14001 Certifications</h1>
      <p >Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3  btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
  </Row>
<Row className='mt-md-5'>

<Col md="6" className='my-auto'data-aos="zoom-out-left" >
<h2 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Customers</h2>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Reduced costs of product due to reduction in wastage and process cost</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Responsible organization with focus on future resource management</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Enhanced access to business partners and potential customers</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Improvised positive image and credibility</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Commitment to social responsibility</h5></li>
 
</ol>


<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>
<Col md="6" className='mt-md-3'data-aos="flip-down">
<Card   className='ml-md-5 my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"3px"}}><h6>ISO 14001</h6></CardSubtitle>

        <CardTitle className='text-white'><h3>ISO Standards Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-4 mt-sx-2 text-white" ><p>The organization's environmental performance standards are improved through the environment management system. The management system component that controls environmental factors, aids in meeting compliance and legal duties, and addresses risks and opportunities is defined by the ISO 14001 Certification</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>
<Row className="mt-3 mx-auto" >  <h2 style={{letterSpacing:'2px',wordSpacing:'3px'}} >Who Can Get <span style={{fontWeight:'500'}}>ISO 14001 CERTIFICATION?</span></h2>
<Col md="7" className='my-auto blurbox' data-aos="fade-down" >
    <h3 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> EMS can be achieved by any industry irrespective of size and location.EMS is applicable to:
<span  style={{fontWeight:'bold'}}>
Renewable Energy sector,
Petro-Chemical Industry,
Automobile Industry,
Mining Industry,
Paper Industry,
Textile Industry</span></h3>
  </Col>
 
  <Col md="5"className='mt-5'>
      {/* Add your image here */}
      <img  data-aos="zoom-out-down" src={think} alt="certification" style={{ maxWidth: "100%",
  height: "auto",  transition: "transform 0.3s ease-in-out",
}}
onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
/>
  </Col>

  
</Row>


</Container>

        </div>
    </div>
    <Col md="12" className='mb-3 text-center' ><h2 style={{letterSpacing:'2px',wordSpacing:'3px'}}>Requirements for <span style={{color:"#57C5B6",fontWeight:'400'}}>ISO 14001</span></h2></Col> 

<Container fluid style={{backgroundImage: `url(${grad})`,backgroundPosition:'center',backgroundRepeat:'none',backgroundSize:'cover',borderTopLeftRadius:'30rem 25rem',borderBottomRightRadius:'40rem 25rem'}}>
  <Row className='mx-auto  justify-content-center' >
  <Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i11} alt="certification" />
  <div className="card-label">Analysis</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Aspect Analysis and Impact Analysis: Analysis of aspects that contribute to destruction of environment resources or atmosphere, conduction of impact studies and enhancement of control measures.</CardText>
  </CardBody>
</Card>


<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg data-aos="zoom-in-up"  top src={i5} alt="certification" />
  <div className="card-label">Planning</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Implementation of Environmental Performance Planning: Involvement of the entire organization in the execution of management systems.</CardText>
  </CardBody>
</Card>
<Card className='blurbox m-5 ' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i1} alt="certification" />
  <div className="card-label">Management</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Resources allocation: Better management of resources in a planned manner to achieve minimal wastes and optimum performance.</CardText>
  </CardBody>
</Card>

</Row>
<Row className='mx-auto justify-content-center'>
<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i12} alt="certification" />
  <div className="card-label">Performance</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Evaluation: Evaluation of environmental performance by using management tools.</CardText>
  </CardBody>
</Card>


<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i13} alt="certification" />
  <div className="card-label">Guidance</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}} >Leadership: Involvement of employees as leaders in the management system.</CardText>
  </CardBody>
</Card>
<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i14} alt="certification" />
  <div className="card-label">Precondition</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Legal Requirements Analysis: Meeting All legal Obligations.</CardText>
  </CardBody>
</Card>


  </Row>
</Container>


      <DemoFooter/>
    </div>
  )
}

export default Environment

