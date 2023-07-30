
import React, { useEffect } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar";
import IndexHeader from "components/Headers/IndexHeader";
function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
 
  return (
    <>
      <IndexNavbar />
      
      <IndexHeader />
      
    
    </>
  );
}

export default Index;
