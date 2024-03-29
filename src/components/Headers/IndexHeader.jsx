
import React,{useRef}from "react";
import { useContext } from "react";
import { ThemeContext } from "../../index";
import { useHistory} from 'react-router-dom';

// reactstrap components
import { Container,Button, NavItem,
  NavLink,
  Row, } from "reactstrap";
import SectionCarousel from "../../views/index-sections/SectionCarousel";
import Clients from "views/index-sections/Clients";
import CompanyProfile from "views/index-sections/CompanyProfile";
import DemoFooter from "components/Footers/DemoFooter";
import { Link } from "react-router-dom";
import Services from "views/services/Services";
// core components
const darkMode=false
function IndexHeader() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { theme, settheme } = useContext(ThemeContext);

  const scrollToSection = () => {
    history.push('./contact')
  };
  return (
    <>
    
      <div
  className="page-header section-dark"
  style={{
    backgroundImage: theme ? `url(${require("assets/img/wall.jpg")})` : `url(${require("assets/img/grad.png")})`
  ,height:"105vh",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px"}}
>
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Elevate Your Certification</h1>
              <div className="fog-low">
                <img alt="certified" src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="certification" src={require("assets/img/fog-low.png")} />
              </div>
            </div>
           
            <h2 className="presentation-subtitle text-center">
           
           Accelerate Your Growth With <span style={{fontWeight:'400'}}>First Certification</span>
            </h2>

          </Container>

        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
                 

        <h4 className="category category-absolute " style={{fontSize:"1.5em"}}>

        
         Get a Free Quote     <Button  color='primary'  className="blurbox btn-round" onClick={scrollToSection}>Contact Us  <i className="nc-icon nc-minimal-right" aria-hidden="true"></i></Button>
 
          
         

        </h4>
 
      </div>
      
      {/* Carousel */}

      <SectionCarousel/>
      <CompanyProfile/>
      
      
      <div ref={sectionRef}> 
     
      
      <Services/></div>
     
      <Clients/>
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
      <DemoFooter />
    
      
    </>
  );
}

export default IndexHeader;
