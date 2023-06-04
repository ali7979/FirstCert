import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import Services from './Services'
import DemoFooter from 'components/Footers/DemoFooter'

function ServicesPage() {
  return (
    <><IndexNavbar />
    <div style={{marginTop:'10rem'}}>
    <Services />
    </div>
    
    <DemoFooter /></>
  )
}

export default ServicesPage
