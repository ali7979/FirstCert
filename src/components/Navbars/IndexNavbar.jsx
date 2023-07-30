import React from "react";
import classnames from "classnames";
import { useContext,useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavItem,
  CustomInput,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { ThemeContext } from "../../index";
import logo from "../../assets/img/firstcertlogo.png"

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const handleLinkClick = () => {
    setNavbarCollapse(false);
    document.documentElement.classList.remove("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  })

  const history = useHistory();

  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleDarkMode = () => {
    setTheme(!theme);
    setNavbarCollapse(false);
    document.documentElement.classList.remove("nav-open");
  };
  useEffect(() => {
    document.body.className = theme ? "dark-mode" : "light-mode";
  }, [theme]);


  return (
    <>
    <a href="tel:+918073358319">
     <div style={{paddingTop:"3px",textAlign:"center",fontFamily: '"Montserrat", "Helvetica", Arial, sans-serif',backgroundColor:"#1A5F7A",color:"white"}}>  <i className="fa fa-phone" /> Phone: +91 8073358319</div>
     </a>
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            tag={Link}
            to="./index"
            title="First Cert"
            style={{ display: "flex", alignItems: "center", letterSpacing: "4px" }}
          >
            <img src={logo} style={{ height: "100%", width: "5.5em"}} alt="First Cert Logo" />
            <div style={{ marginLeft: "1em", fontFamily: "serif", color: theme ? "white" : "black" }}>
              <span style={{ fontSize: '1.4em' }}>First Cert</span>
              <h6 style={{ fontFamily: '"Montserrat", "Helvetica", Arial, sans-serif', fontWeight: "700", marginTop: "-0em", letterSpacing: "1px", color: "#51cbce" }}>Accelerating your growth</h6>
            </div>
          </NavbarBrand>

          <button
            aria-expanded={navbarCollapse}
            className={`navbar-toggler ${navbarCollapse ? 'toggled' : ''} ${theme ? 'dark' : ''}`}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                style={{ color: theme ? 'white' : 'black' }}
                data-placement="bottom"
                title="Home Page"
                onMouseEnter={(e) => e.target.style.color = '#57C5B6'}
                onMouseLeave={(e) => e.target.style.color = theme ? 'white' : 'black'}
                tag={Link}
                to="./index"
                onClick={handleLinkClick}
              >
                <i className="fa fa-home" />Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={(e) => e.preventDefault()}
                role="button"
                style={{ color: theme ? 'white' : 'black' }}
                onMouseEnter={(e) => e.target.style.color = '#57C5B6'}
                onMouseLeave={(e) => e.target.style.color = theme ? 'white' : 'black'}
              >
                <i className="fa fa-code-branch"></i>
                Services
              </DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <li>
                  <a  className="dropdown-item drhead" href="#" onClick={e => e.preventDefault()}>
                    Quality &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/quality"
                        onClick={handleLinkClick}
                      >
                        ISO 9001
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/cmmi"
                        onClick={handleLinkClick}
                      >
                        CMMI
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item drhead" href="#" onClick={e => e.preventDefault()}>
                    Environment &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/environment"
                        onClick={handleLinkClick}
                      >
                        ISO 14001
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item drhead" href="#" onClick={e => e.preventDefault()}>
                    Health and Safety &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/iso45001"
                        onClick={handleLinkClick}
                      >
                        ISO 45001
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hipaa"
                        onClick={handleLinkClick}
                      >
                        HIPAA
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item drhead" href="#" onClick={e => e.preventDefault()}>
                    Food Safety &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/halal"
                        onClick={handleLinkClick}
                      >
                        HALAL
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/haccp"
                        onClick={handleLinkClick}
                      >
                        HACCP
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/iso22000"
                        onClick={handleLinkClick}
                      >
                        ISO 22000
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item drhead" href="#" onClick={e => e.preventDefault()}>
                    Cyber Security &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/iso27001"
                        onClick={handleLinkClick}
                      >
                        ISO 27001
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/gdpr"
                        onClick={handleLinkClick}
                      >
                        GDPR
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/pci"
                        onClick={handleLinkClick}
                      >
                        PCI
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/soc"
                        onClick={handleLinkClick}
                      >
                        SOC
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/vapt"
                        onClick={handleLinkClick}
                      >
                        VAPT
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item drhead" onClick={e => e.preventDefault()} href="#">
                    Product Certification &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/cemarking"
                        onClick={handleLinkClick}
                      >
                        CE MARKING
                      </Link>
                    </li>
                  </ul>
                </li>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                data-placement="bottom"
                tag={Link}
                to="/aboutus"
                style={{ color: theme ? 'white' : 'black' }}
                onMouseEnter={(e) => e.target.style.color = '#57C5B6'}
                onMouseLeave={(e) => e.target.style.color = theme ? 'white' : 'black'}
                onClick={handleLinkClick}
              >
                <i className="fa fa-users" />About us
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink
                  onMouseEnter={(e) => e.target.style.color = '#57C5B6'}
                  onMouseLeave={(e) => e.target.style.color = theme ? 'white' : 'black'}
              tag="span">
             {theme ?<i className="fas fa-sun" onClick={handleToggleDarkMode} style={{ fontSize: "1.5em", color: theme ? "white" : "black",cursor: 'pointer'  }} ><p className="mx-1"> Light Mode</p></i> 
             :
             <i className="fa-solid fa-moon fa-lg" onClick={handleToggleDarkMode} style={{ fontSize: "1.5em", color: theme ? "white" : "black" ,cursor: 'pointer' }}><p className="mx-1"> Dark Mode</p></i>
            } 

            </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="primary"
                onClick={() => 
                  { setNavbarCollapse(false);
                    document.documentElement.classList.remove("nav-open");
                    history.push('./contact')
                  
                }}

              >
                <i className="nc-icon nc-circle-10"></i> Contact Us
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default IndexNavbar;
