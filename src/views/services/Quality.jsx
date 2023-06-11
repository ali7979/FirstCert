import React, { useEffect } from 'react'
import { useHistory} from 'react-router-dom';

import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import S19001 from 'assets/img/services/S9001.png'
import think from 'assets/img/services/think.png'
import grad from 'assets/img/services/wave.svg'
import i1 from 'assets/img/services/1.png'
import i2 from 'assets/img/services/2.svg'
import i3 from 'assets/img/services/3.png'
import i4 from 'assets/img/services/4.png'
import i5 from 'assets/img/services/5.png'
import i6 from 'assets/img/services/6.png'

import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import {
  Button,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

import Aos from 'aos';
import 'aos/dist/aos.css'

function Quality() {
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
      <Container style={{marginTop:"2em"}}>
  <Row >
    <Col md="6" className='mt-5' >
      {/* Add your image here */}
      <img  src={S19001} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" className='my-auto animated fadeIn '>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >ISO 9001 Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
  </Row>
<Row className='mt-md-5'>
<Col md="6" className='my-auto ' data-aos="zoom-out-left">
<h1 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Customers</h1>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Improved quality and service</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Delivery on time</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Right-first-time attitude</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Facilitate Collaborations in Business</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Independent audit.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Fewer returned products and complaints</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Demonstrates commitment to quality</h5></li>
</ol>


<Button color='primary'size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>
<Col md="6"  data-aos="flip-down" >
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"3px"}}><h6>ISO 9001</h6></CardSubtitle>

        <CardTitle className='text-white'><h3>ISO Standards Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>The global standard for quality management systems is ISO 9001. Companies employ OMS to show that they can consistently deliver high-quality goods and services that adhere to legal and customer criteria.</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>

</Row>
<Row className="mt-3 mx-auto" >  <h1 style={{letterSpacing:'2px',wordSpacing:'3px'}} >Who Can Get <span style={{fontWeight:'500'}}>ISO 9001 CERTIFICATION?</span></h1>
  <Col md="5"className='mt-5'>
      {/* Add your image here */}
      <img data-aos="zoom-out-down" src={think} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
  </Col>

  <Col md="7" className='my-auto blurbox' data-aos="fade-down" >
    <h3 className='text-center' style={{fontFamily:"'Raleway', sans-serif",fontWeight:"400",letterSpacing:'2px',wordSpacing:'4px'}}> Certification is a quality management standard intended to be applicable for any organization, regardless of type, size, or product & services it provides.</h3>
  </Col>
</Row>


</Container>

        </div>
    </div>
    <Col md="12" className='mb-3 text-center' ><h1 style={{letterSpacing:'2px',wordSpacing:'3px'}}>Requirements for <span style={{color:"#57C5B6",fontWeight:'400'}}>ISO 9001</span></h1></Col> 

<Container fluid style={{backgroundImage: `url(${grad})`,backgroundPosition:'center',backgroundRepeat:'none',backgroundSize:'cover',borderTopLeftRadius:'30rem 25rem',borderBottomRightRadius:'40rem 25rem'}}>
  <Row className='mx-auto  justify-content-center' >
  <Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg data-aos="zoom-in-up" top src={i1} alt="..." />
  <div className="card-label">ISO Certification</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Resource Management Allocation of resources, assign responsibility, training & communication, both internal & external!</CardText>
  </CardBody>
</Card>


<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg data-aos="zoom-in-up" top src={i2} alt="..." />
  <div className="card-label">Growth</div>
  <CardBody data-aos="fade-up">
    <CardText style={{fontWeight:'400',color:'white'}}>Risk Management & Vendor
Management (supplier relationship)!</CardText>
  </CardBody>
</Card>
<Card className='blurbox m-5 ' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg data-aos="zoom-in-up" top src={i3} alt="..." />
  <div className="card-label">Support</div>
  <CardBody >
    <CardText data-aos="fade-up" style={{fontWeight:'400',color:'white'}}>Top Management Support
Management Responsibility</CardText>
  </CardBody>
</Card>

</Row>
<Row className='mx-auto justify-content-center'>
<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg data-aos="zoom-in-up"  top src={i4} alt="..." />
  <div className="card-label">Scope</div>
  <CardBody>
    <CardText data-aos="fade-up" style={{fontWeight:'400',color:'white'}}>Product & Service, the scope of audit & exclusions!</CardText>
  </CardBody>
</Card>


<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i5} alt="..." />
  <div className="card-label">Validation</div>
  <CardBody>
    <CardText data-aos="fade-up" style={{fontWeight:'400',color:'white'}} >Evaluation - Monitor, measure & validate!</CardText>
  </CardBody>
</Card>
<Card className='blurbox m-5' style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
  <CardImg  data-aos="zoom-in-up" top src={i6} alt="..." />
  <div className="card-label">Continual</div>
  <CardBody>
    <CardText data-aos="fade-up" style={{fontWeight:'400',color:'white'}}>Sustainability!</CardText>
  </CardBody>
</Card>


  </Row>
</Container>


      <DemoFooter/>
    </div>
  )
}

export default Quality
