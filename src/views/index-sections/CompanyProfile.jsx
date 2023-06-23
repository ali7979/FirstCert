import React, { useEffect } from 'react'
import cp from "../../assets/img/cp.png"
import logo from "../../assets/img/firstcertlogo.png"
import {
    Container,
    Row,
    Modal ,
    Col,
    Button
  } from "reactstrap";
  import Aos from 'aos';
import 'aos/dist/aos.css'

function CompanyProfile() {
  useEffect(()=>
  {
    Aos.init();
  },[])
  const [liveDemo, setLiveDemo] = React.useState(false);
  return (
    <div className='section '>
      <Container >
          <Row>
            <Col md="6" >
           
            <div  className='cp'  style={{maxWidth: "100%", height: "auto"}}>
                <img src={cp} alt="first cert certification" loading="lazy"  style={{maxWidth: "100%", height: "auto"}}/>
      </div>
            </Col>
            <Col md="6" className='text-left' data-aos="fade-up">
                <h2 style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900",color:"#51cbce",letterSpacing:"2px"}}>COMPANY PROFILE</h2>
              
                <h4 className='text-middle ' style={{letterSpacing:"0.8px",fontWeight:"400"}}>
                First Cert is a consulting organization that offers Business Advisory, Training, 
Process Consultation, and Certification services. Over 10 consultants and auditors 
work for us, and we're active in over 10 countries.<br/>
 <br/>More than 100 of our projects were completed successfully. While coming from 
quite different backgrounds, our consultants and auditors are brought together by 
a common set of values.They provide certification with minimal customer effort 
and straightforward documentation.
<br/>
 
                </h4>
                <br/>
                <Button className="btn-round align-center" color="primary" onClick={() => setLiveDemo(true)}>Know More</Button>

                <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h2 className="modal-title" id="exampleModalLiveLabel"style={{fontFamily: "'Raleway', sans-serif",fontWeight:"900",color:"#51cbce"}}>
          <img src={logo} alt='first cert certification' loading="lazy"  style={{height:"100px",width:"100px"}}/>
  First Cert
          </h2>
         
        </div>
        <div className="modal-body">
        <h6 className='text-middle ' style={{fontFamily: "'Raleway', sans-serif",letterSpacing:"1px",wordSpacing:"1.5px",fontWeight:"400"}}>
Instead of just adhering to accepted practises, we put more of an emphasis on 
actions that could boost your bottom line. 
Due to our certification services, all of 
our clients have reported increases in sales, brand awareness, employee retention, 
and ultimately, profits.<br/>
 We work on complete finished projects. From advising which certifications will 
yield the greatest return on investment to organizing external audits, gap 
analyses, documentation, training, and internal audits. We are the source of all of 
your needs</h6>
        </div>
        <div className="modal-footer">
          
          
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>

            </Col>
            </Row>
            </Container>
    </div>
  )
}

export default CompanyProfile
