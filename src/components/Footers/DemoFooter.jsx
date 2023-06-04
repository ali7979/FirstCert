
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
    
        <div class="ftsec mt-5">
  <footer
          class="text-center text-lg-start text-black blurbox "
          style={{
          marginTop: "6em"}}  >
            <Container>
              <Row >
   <div class="container p-4 pb-0 ">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <img src={logo} alt="logo" style={{height:"150px",width:"250px"}}/>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
            <h6 class="text-uppercase mb-4 font-weight-bold">Company</h6>
            <p>
              <NavLink  style={{fontWeight:'500',color:'black'}} to='/aboutus'>About Us</NavLink>
            </p>
            <p>
            <NavLink  style={{fontWeight:'500',color:'black'}} to="/services"> Services</NavLink>
            </p>
           
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
            <h6 class="text-uppercase mb-4 font-weight-bold">
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
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-left ">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p  style={{color:'black', fontWeight:'500'}}><i class="fas fa-home mr-3"></i> Bangalore, India</p>
            <p style={{color:'black'}}><i class="fas fa-envelope mr-3"></i> <a  style={{color:'black', fontWeight:'500'}} href="https://mail.google.com/mail/?view=cm&to=info@firstcertification.com" 
>info@firstcertificationcom </a></p>
            <p  style={{color:'black', fontWeight:'500'}}><i class="fas fa-phone mr-3" ></i> +91 8073358319</p>
          </div>
        </div>
      </section>

      <hr class="my-3"/>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2023 Copyright:
              <NavLink class="text-dark" tag={Link} to="/"
                 > firstcertification.com</NavLink>
                
            </div>
          </div>

          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
           
            <a
               class="btn btn-outline-light btn-floating m-1 text-dark"
               
               role="button"
               href="https://www.linkedin.com/company/first-cert/"
               target="_blank"
               ><i class="fab fa-linkedin"></i
              ></a>

           
              <a class="btn btn-outline-light btn-floating m-1 text-dark" 
   role="button" 
   href="https://api.whatsapp.com/send?phone=918073358319&text=Hi FirstCert! I want to know your Services "
   target="_blank"
>
  <i class="fab fa-whatsapp"></i>
</a>


            <a
               class="btn btn-outline-light btn-floating m-1 text-dark"
               
               role="button"
               href="https://mail.google.com/mail/?view=cm&to=info@firstcertification.com"      target="_blank"
               onclick="openGmail(event)" ><i class="fas fa-envelope"></i
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
