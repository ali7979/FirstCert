import {React,useEffect} from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import DemoFooter from 'components/Footers/DemoFooter'
import haccp from 'assets/img/services/haccp.png'
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
function Haccp() {
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
      <img  src={haccp} alt="haccp certification" style={{ maxWidth: "100%",
  height: "auto",  transition: "transform 0.3s ease-in-out",
}}
onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
/>
    </Col>
    <Col md="6" className='my-auto'>
      <h1 className="text-left ml-md-5" style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900"}} >HACCP  Certifications</h1>
      <p className=' ml-md-5' style={{fontWeight:'400'}}>Achieve this certification in a hassle-free approach.Simpler,Faster and Affordable</p>
      <Button color='primary' size="lg" className=" mt-3 ml-md-5 btn-round"  onClick={() => history.push('./contact')} >Enquire Now</Button>

    </Col>
    
   
  </Row>
<Row className='mt-3'>


  <Col md="6" className='my-auto' data-aos="zoom-out-left">
<h2 style={{fontWeight:"bold",fontFamily:"'Raleway', sans-serif",letterSpacing:"1px"}}>Benefits to your Organization</h2>

<ol style={{lineHeight: "1", margin: "0"}}>
  <li className="mt-2" style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Implementation of internationally recognized standard.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Better trust with customers.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Reduced costs in the long run.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Food safety standards increase.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Informed staff in the organization.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Enhanced inventory control.</h5></li>
  <li style={{fontWeight:"bold", margin: "0"}}><h5 style={{fontWeight:'400', margin: "0"}}>Consistency in product quality.</h5></li>
</ol>

<Button color='primary' size="lg" className=" my-3 btn-round" onClick={() => history.push('./contact')}>Enquire Now</Button>

</Col>


<Col md="6" className='my-auto' data-aos="flip-down">
<Card   className='mx-md-auto my-md-auto' style={{  background:"#1A5F7A",width: '30em',height:'auto'}}>
    <CardBody>
    <CardSubtitle className="mt-2 text-white" style={{letterSpacing:"5px"}}><h6 >HACCP</h6></CardSubtitle>

        <CardTitle className='text-white'><h3><span style={{letterSpacing:'4px',fontWeight:'400'}}>HACCP</span> Apply In Various</h3></CardTitle>
        <CardText className='text-white '><h3 style={{fontWeight:800,marginTop:0}}>"Companies"</h3></CardText>
        <hr className="divider-line" />
        <CardSubtitle className="mt-md-5 mt-sx-2 text-white" ><p>The strategy for recognizing and controlling risks or hazards in food systems is known as HACCP. Through analysis, the identification of crucial areas, and the application of these controls, the food system is addressed. For all food industries, it outlines acceptable manufacturing methods. As the foundation for the majority of international food-related standards, HACCP is crucial for your compliance. The detection and management of biological, physical, and chemical dangers is the foundation of its design, which takes a preventive approach."</p></CardSubtitle>

    </CardBody>
</Card>
  </Col>
</Row>

<Row  className='mt-5'>
  <Col md="12"data-aos="fade-up">
<Card>
<CardHeader style={{backgroundColor:'#1A5F7A',color:'white'}}><h6>WHAT ARE THE REQUIREMENTS OF HACCP CERTIFICATION ?</h6></CardHeader>
  <CardBody>
      <CardTitle>
      <CardTitle>
    <ul style={{ lineHeight: '1', margin: '0', fontSize: '1.5em' }}>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        <u>  Principles of HACCP </u> - There are 7 principles of HACCP. Implementation of these principles is very important to have an effective system.
        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        <u> Identification of the Hazard</u>  – It is very crucial to recognize hazards and classify these hazards into Physical, Biological and Chemical hazards. This will help us to understand the priority and impact of the hazard.
        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
         <u>Critical Control Points </u> – Analysis of the controls required in measurable terms with defining of maximum and minimum levels of acceptance.
        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
         <u>HACCP Plan</u>  - The 12 steps of HACCP are required to be implemented as a part of the plan. Recognition of leaders to do the same is also crucial.
        </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
        <u>  PRP and OPRP </u> - The controls which are required and the extent to which the control is required must be understood and implemented. Risk calculation to be carried out based on the classification of hazards and priority of its impact.
        </h6>
      </li>
      <li>
        <h6 style={{ fontWeight: 'bold', margin: '0' ,letterSpacing:'2px'}}>
       <u>   Traceability </u> - Traceability of any product in the food lifecycle to its very start and to understand the hazard generation point and to rectify issues is very critical.
        </h6>
      </li>
      <li >
        <h6 style={{ fontWeight: 'bold', margin: '0',letterSpacing:'2px' }}>
          <u>Integration with various international Standards</u>  - HACCP is a basic platform for various international standard under Codex Alimentarius.
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



export default Haccp
