
/*eslint-disable*/
import React from "react";
import logo from "../../assets/img/fclogotrans.png"
// reactstrap components
import { Row, Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

function DemoFooter() {
  function openGmail(event) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const appUrl = "googlegmail://co?to=info@firstcertification.com";
    const webUrl = "https://mail.google.com/mail/?view=cm&to=info@firstcertification.com";
    
    if (isMobile) {
      event.preventDefault();
      window.location.href = appUrl;
    } else {
      const webWindow = window.open(webUrl, "_blank");
      if (!webWindow || webWindow.closed || typeof webWindow.closed === "undefined") {
        event.preventDefault();
        window.location.href = appUrl;
      }
    }
  }
  return (
    
        <div className="ftsec mt-5">
  <footer
          className="text-center text-lg-start text-black blurbox animated fadeIn"
          style={{
          marginTop: "6em"}}  >
            <Container>
              <Row >
   <div className="container p-4 pb-0 ">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <Link to="/index">  <img loading="lazy"  src={logo} alt="firstcertification logo" style={{height:"150px",width:"250px"}} /></Link>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
            <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
            <p>
              <NavLink  style={{fontWeight:'500',color:'black'}} to='/aboutus'>About Us</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to="/services"> Services</NavLink>
            </p>
           
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Our Services
            </h6>
            <p >
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/quality'>Quality</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/environment'>Environment</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/services'>Health & Safety</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/services'>Food Safety</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/services'>Cyber Security</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/cemarking'>CE Marking</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to='/cmmi'>CMMI</NavLink>

            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-left ">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p  style={{color:'black', fontWeight:'500'}}><i className="fas fa-home mr-3"></i> Bangalore, India</p>
            <p style={{color:'black'}}><i className="fas fa-envelope mr-3"></i> <a  style={{color:'black', fontWeight:'500'}} href="https://mail.google.com/mail/?view=cm&to=info@firstcertification.com" 
>info@firstcertification.com </a></p>
            <p  style={{color:'black', fontWeight:'500'}}><i className="fas fa-phone mr-3" ></i> +91 8073358319</p>
          </div>
        </div>
      </section>

      <hr className="my-3 animated fadeIn"/>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2023 Copyright:
              <NavLink className="text-dark" tag={Link} to="/"
                 > firstcertification.com</NavLink>
                
            </div>
          </div>

          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
           
            <a
               className="btn btn-outline-light btn-floating m-1 text-dark"
               
               role="button"
               href="https://www.linkedin.com/company/first-cert/"
               target="_blank"
               ><i className="fab fa-linkedin"></i
              ></a>

           
              <a className="btn btn-outline-light btn-floating m-1 text-dark" 
   role="button" 
   href="https://api.whatsapp.com/send?phone=918073358319&text=Hi FirstCert! I want to know your Services "
   target="_blank"
>
  <i className="fab fa-whatsapp"></i>
</a>


            <a
               className="btn btn-outline-light btn-floating m-1 text-dark"
               
               role="button"
               href="https://mail.google.com/mail/?view=cm&to=info@firstcertification.com"      target="_blank"
               onClick={openGmail} ><i className="fas fa-envelope"></i
              ></a>

           
          </div>
        </div>
      </section>
    </div>
    </Row>
    </Container>
  </footer>
  
</div>
      
  );
}

export default DemoFooter;
