import React, { useEffect } from 'react'
import {useState} from 'react'
import contactus from '../../assets/img/contactus.png'
import emailjs from 'emailjs-com';
import { Alert } from 'reactstrap';
import 'aos/dist/aos.css'
import Aos from 'aos';
import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
  import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
function ContactUs() {

  const [visible, setVisible] = useState(false); // State variable for alert visibility

  const onDismiss = () => {
    setVisible(false);
  };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8xxvx1n', 'template_r18dlen',e.target,'C2MELbGdO70klMVdY',)
          .then((result) => {
           // console.log('Email sent successfully');
            setVisible(true); 
           e.target.reset()

          }, (error) => {
            alert('Error sending email');
          });
      };
      useEffect(()=>
      {
        Aos.init();
      },[])
  return (
    <>
    <IndexNavbar/>
    <div className="main mt-4">
      <div className="section landing-section">
      <Alert style={{backgroundColor:"#51CBCE",borderRadius:'50px',marginTop:'7rem'}} className='my-md-5 text-center' isOpen={visible} toggle={onDismiss}>
            <b>Success !!</b>   Your Message has been successfully sent !
          </Alert>
      <Container style={{marginTop:"4em"}}>
  <Row className='my-auto'>
    <Col md="6" className='my-auto'data-aos="flip-down">
      {/* Add your image here */}
      <img  src={contactus} alt="Your Image" style={{ maxWidth: "100%",
  height: "auto"}}/>
    </Col>
    <Col md="6" data-aos="flip-left">
      <h1 className="text-center" style={{fontFamily:"'Raleway',sans-serif",fontWeight:'400',letterSpacing:'2px'}}>Keep in touch?</h1>
      <Form className="contact-form" onSubmit={sendEmail}>
        <Row>
          <Col md="6">
            <label >Name</label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input required name="name" placeholder="Name" type="text" />
            </InputGroup>
          </Col>
          <Col md="6">
            <label>Email</label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input  required name="email" placeholder="Email" type="email" />
            </InputGroup>
          </Col>
        </Row>
        <label>Phone Number</label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-phone" />
                </InputGroupText>
              </InputGroupAddon>
              <Input required name="phone" placeholder="Phone" type="tel" />
            </InputGroup>
        <label>Message</label>
        <Input name="message"
          placeholder="Tell us your thoughts and feelings..."
          type="textarea"
          rows="4"
          required
        />
    <Row>
  <Col>
    <Button className="btn-fill btn-round w-100 text-center" color="primary" >
      Send Message
    </Button>
  </Col>
</Row>
      </Form>
    </Col>
  </Row>
</Container>

        </div>
    </div>
    <DemoFooter/>
    </>
  )
}

export default ContactUs
