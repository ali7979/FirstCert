import DemoFooter from 'components/Footers/DemoFooter';
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import {
    Container,
    Row,
    Col,
    
  } from "reactstrap";

function PrivacyPolicy() {
  return (
    <div>
        <IndexNavbar/>
        <div className='section '>
      <Container >
          <Row>
            
            <Col md="12" className='text-middle mt-4' >
                <h2  style={{fontFamily: "'Raleway', sans-serif",fontWeight:"500",color:"#51cbce",letterSpacing:"5px",textAlign:"center"}}>Our Privacy Policy</h2>
              <br/>
              
                <h6 className='text-middle ' style={{ textAlign:"center", textTransform: "capitalize" ,letterSpacing:"0.8px",fontWeight:"500"}}>
                Your privacy is important to us, so Top Certifier has created this Privacy Policy to explain how your information is protected, collected and used. This Privacy Policy applies to all Top Certifier web sites, including our publicly accessible web sites located at Top Certifier sub domain.
                <br/>
                <br/>

This Privacy Policy may be updated from time to time. By using Top Certifier, you consent to the terms and conditions of this Privacy Policy and are aware that our policies may evolve in the future. If there is a conflict between our Terms of Use governing your use of the sites and this Privacy Policy, the Terms of Use control.
<br/>
<br/>

<h5 style={{fontWeight:"500"}}>Collection</h5>
Information posted on Top Certifier is obviously publicly available. Our servers are located in the United States and in the European Union. Therefore, if you choose to provide us with personal information, you are consenting to the transfer and storage of that information on our servers in the United States and Europe. We collect and store the following personal information:

Email address, physical contact information, and (depending on the service used) sometimes financial information.

Computer sign-on data, statistics on page views, traffic to and from Top Certifier and ad data (all through cookies - you can take steps to disable the cookies on your browser although this is likely to affect your ability to use the site).

Other information, including your IP address and standard web log information.

<br/>
<br/>
<h5 style={{fontWeight:"500"}}>
Disclosure</h5>
We don't sell or rent users' personal information to third parties for their marketing purposes without user’s explicit consent. We may disclose personal information to respond to legal requirements, enforce our policies, respond to claims that a posting or other content violates other's rights, or protect anyone's rights, property, or safety. We may also share personal information with:

Corporate affiliates who help detect and prevent potentially illegal acts and provide joint services. (Our corporate affiliates will market only to users who ask them to).

Service providers who help with our business operations.

<br/>
<br/>
<h5 style={{fontWeight:"500"}}>
Using Information</h5>
You may use personal information gathered from Top Certifier only to follow up with another user about a specific posting, not to send spam or collect personal information from someone who hasn't agreed to that.

<br/>
<br/>
<h5 style={{fontWeight:"500"}}>
Security</h5>
We use many tools (encryption, passwords, and physical security) to protect your personal information against unauthorized access and disclosure. We can't however guarantee the continuous functionality and liability of these tools at all times.<br/> Send questions about this policy to  <span style={{textTransform:"none"}}>info@firstcertification.com</span><br/>
 
<br/>
 
                </h6>
                <br/>
             
       
       
          
         

            </Col>
            </Row>
            </Container>
    </div>
    <DemoFooter/>

    </div>
  )
}

export default PrivacyPolicy
