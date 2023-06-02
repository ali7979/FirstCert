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

const root = ReactDOM.createRoot(document.getElementById("root"));
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <BrowserRouter>
         <ScrollToTop/>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "light" : "dark"}>
        <Switch>
     
          <Route path="/index"  primary={false} render={(props) => <Index {...props} />} />
          <Route
            path="/aboutus"
            primary={false}
            render={(props) => <AboutUs/>}
          />
          <Route
            path="/contact"
            primary={false}
            render={(props) =>  <ContactUs/>}
          />
         

<Route
            path="/quality"
            primary={false}
            render={(props) =>  <Quality/>}
          />
          <Route
            path="/iso45001"
            primary={false}
            render={(props) =>  <Iso45001/>}
          />

<Route
            path="/hipaa"
            primary={false}
            render={(props) =>  <Hippa/>}
          />


<Route
            path="/environment"
            primary={false}
            render={(props) =>  <Environment/>}
          />

<Route
            path="/halal"
            primary={false}
            render={(props) =>  <Halal/>}
          />
            <Route
            path="/haccp"
            primary={false}
            render={(props) =>  <Haccp/>}
          />
            <Route
            path="/iso22000"
            primary={false}
            render={(props) =>  <Iso22000/>}
          />

          <Redirect to="/index" />
        </Switch>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

root.render(<App />);
