import React from 'react'

import Footer from './Footer'
import Navbar from "./Navbar"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Contact us</h1>
        </div>
      </div>
      <div className="g-form text-center container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiZ9dwUGT-EpJ3nxcj5Fxf3enbpiOZE1cxunNRBRmqzMCBlg/viewform?embedded=true"
          width="640" height="1717" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>

      <div className="container connect mt-4">
        <div className="row text-center">
          <div className="col-lg-6 col-sm-12 whats-viber padding">
            <h3 className="contact-headers-us">Contact us :</h3>
            <a href="#"><i className="far fa-envelope"></i></a> <span>gifton.ukraine@gmail.com</span> <br/>
            <a href="#"><i className="fab fa-whatsapp"></i> <i className="fab fa-viber"></i></a> <span>+380 63 73 201 53</span>
          </div>
            <div className="col-lg-6 col-sm-12 fa-ins padding">
              <h3 className="contact-headers-us">Follow us :</h3>
              <a href="https://www.facebook.com/giftonukraine/" target="_blank"><i className="fab fa-facebook"></i><span> Gifton Ua</span> </a> <br/>
              <a href="https://www.instagram.com/gifton.ukraine/" target="_blank"><i className="fab fa-instagram"></i><span> giftonua</span> </a>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Contact