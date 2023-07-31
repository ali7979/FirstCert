import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import Index from "views/Index";

import ContactUs from "views/index-sections/ContactUs";
import AboutUs from "views/index-sections/AboutUs";
import Quality from "views/services/Quality";
import Environment from "views/services/Environment";
import Iso45001 from "views/services/Iso45001";
import Hippa from "views/services/Hippa";
import Halal from "views/services/Halal";
import Haccp from "views/services/Haccp";
import Iso22000 from "views/services/Iso22000";
import ScrollToTop from "components/ScrollToTop";
import Cmmi from "views/services/Cmmi";
import Iso27001 from "views/services/cybersecurity/Iso27001";
import Gdpr from "views/services/cybersecurity/Gdpr";
import Pci from "views/services/cybersecurity/Pci";
import Soc from "views/services/cybersecurity/Soc";
import Vapt from "views/services/cybersecurity/Vapt";
import CeMarking from "views/services/CeMarking";
import ServicesPage from "views/services/ServicesPage";
import PrivacyPolicy from "views/index-sections/PrivacyPolicy";
import TermsNConditions from "views/index-sections/TermsNConditions";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} />} />
          <Route path="/aboutus" render={(props) => <AboutUs />} />
          <Route path="/privacypolicy" render={(props) => <PrivacyPolicy />} />
          <Route path="/tnc" render={(props) => <TermsNConditions />} />
          <Route path="/contact" render={(props) => <ContactUs />} />
          <Route path="/quality" render={(props) => <Quality />} />
          <Route path="/cmmi" render={(props) => <Cmmi />} />
          <Route path="/iso45001" render={(props) => <Iso45001 />} />
          <Route path="/hipaa" render={(props) => <Hippa />} />
          <Route path="/environment" render={(props) => <Environment />} />
          <Route path="/halal" render={(props) => <Halal />} />
          <Route path="/haccp" render={(props) => <Haccp />} />
          <Route path="/iso22000" render={(props) => <Iso22000 />} />
          <Route path="/iso27001" render={(props) => <Iso27001 />} />
          <Route path="/gdpr" render={(props) => <Gdpr />} />
          <Route path="/pci" render={(props) => <Pci />} />
          <Route path="/soc" render={(props) => <Soc />} />
          <Route path="/vapt" render={(props) => <Vapt />} />
          <Route path="/cemarking" render={(props) => <CeMarking />} />
          <Route path="/services" render={(props) => <ServicesPage />} />
          <Redirect to="/" />
        </Switch>
      </ThemeContext.Provider>
    </BrowserRouter>
    
  );
};

root.render(<App />);
