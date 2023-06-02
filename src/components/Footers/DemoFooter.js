/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import logo from "../../assets/img/fclogotrans.png"
// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
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
            <h6 class="text-uppercase mb-4 text-dark">Products</h6>
            <p>
              <a class="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a class="text-dark">MDWordPress</a>
            </p>
            <p>
              <a class="text-dark">BrandFlow</a>
            </p>
            <p>
              <a class="text-dark">Bootstrap Angular</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a class="text-dark">Your Account</a>
            </p>
            <p>
              <a class="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a class="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a class="text-dark">Help</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-left">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

      <hr class="my-3"/>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2020 Copyright:
              <a class="text-dark" href="https://mdbootstrap.com/"
                 >MDBootstrap.com</a
                >
            </div>
          </div>

          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
           
            <a
               class="btn btn-outline-light btn-floating m-1 text-dark"
               
               role="button"
               ><i class="fab fa-facebook-f"></i
              ></a>

           
            <a
               class="btn btn-outline-light btn-floating m-1 text-dark"
             
               role="button"
               ><i class="fab fa-twitter"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-dark"
               
               role="button"
               ><i class="fab fa-google"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-dark"
           
               role="button"
               ><i class="fab fa-instagram"></i
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
