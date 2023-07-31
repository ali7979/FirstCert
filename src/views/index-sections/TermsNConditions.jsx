import DemoFooter from 'components/Footers/DemoFooter';
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import {
    Container,
    Row,
    Col,
    
  } from "reactstrap";
function TermsNConditions() {
  return (
    <div>
    <IndexNavbar/>
    <div className='section'>
  <Container>
    <Row>
      <Col md="12" className='text-middle mt-5'>
        <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "500", color: "#51cbce", letterSpacing: "5px", textAlign: "center" }}>
          Terms And Conditions
        </h2>
        <br />
        <h6 className='text-left' style={{ textAlign: "center", textTransform: "capitalize", letterSpacing: "0.8px", fontWeight: "500" }}>
          <h5 style={{fontWeight:"500"}}>Introduction</h5>
          
          Thank you for visiting our website, FirstCertification, which is owned, published and all rights are reserved by Blue Host India.
          <br />
          
          By using our website, you agree to be legally bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website.
          <br />
          <br />
          <h5 style={{fontWeight:"500"}}>Use of Website</h5>
          
          2.1 Acceptance of Terms: Your use of our website is subject to these Terms and Conditions. Whether or not you register your details with us, using our website constitutes acceptance of these terms.
          <br />
          2.2 Revisions to Terms: We may revise these terms from time to time. It is your responsibility to review these legal statements periodically, as you are legally bound by them.
          <br />
          2.3 Additional Terms: Certain areas of our website may be subject to additional terms or terms that supersede these ones. You will be informed of any additional terms applicable to specific pages.
          <br />
          2.4 Registration: You may use our website without registering your details with us. However, certain areas may only be accessible to registered users.
          <br />
          <br />
          <h5 style={{fontWeight:"500"}}> Data Hosting</h5>
          
          The website and all associated data are hosted by Blue Host at www.firstcertification.com. We take utmost care to ensure the security and privacy of your information in accordance with our Privacy Policy.
          <br />
          <br />
          <h5 style={{fontWeight:"500"}}> Intellectual Property</h5>
      
          4.1 Ownership: The content, design, graphics, and other materials on this website are owned by FirstCertification or licensed to us. All rights are reserved.
          <br />
          4.2 Use of Content: You may use the website's content for personal and non-commercial purposes only. Any unauthorized use, reproduction, or distribution of the content is strictly prohibited.
          <br />
          <br />
          <h5 style={{fontWeight:"500"}}>  Limitation of Liability</h5>
          
          5.1 Information Accuracy: While we strive to provide accurate and up-to-date information, we do not warrant the completeness or accuracy of the content on our website. You use the information at your own risk.
          <br />
          5.2 Third-Party Links: Our website may contain links to third-party websites. We do not endorse or control the content of these external websites and are not responsible for any damages or losses arising from your use of such links.
          <br />
          5.3 Indemnity: You agree to indemnify and hold harmless FirstCertification, its officers, employees, and agents from any claims, damages, or losses arising from your use of our website or violation of these Terms and Conditions.
          <br />
          <br />
          <h5 style={{fontWeight:"500"}}> Governing Law</h5>
          
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of our website shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
          <br />
          <br />
          <h5 style={{fontWeight:"500"}}>    Contact Information
          </h5>
          For any inquiries or concerns regarding these Terms and Conditions, please contact us at <span style={{textTransform:"lowercase"}}> info@firstcertification.com /
+91 8073358319.</span>
          <br />
          <br />
          By using FirstCertification's website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          <br />
        </h6>
        <br />
      </Col>
    </Row>
  </Container>
</div>
<div
        className="whatsapp-icon"
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          zIndex: "999",
          fontSize:"2rem"
         
        }}
      >
        <a style={{zIndex:"999"}} href="https://api.whatsapp.com/send?phone=918073358319&text=Hi FirstCert! I want to know your Services " target="_blank" rel="noopener noreferrer">
          <i style={{ color:"#25d366"}} className="fab fa-whatsapp" />
        </a>
      </div>

<DemoFooter/>

</div>
  )
}

export default TermsNConditions
