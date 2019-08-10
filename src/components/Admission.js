import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'


const Admission = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Admission</h1>
        </div>
      </div>
      <div className="container">
        <div className="ad-pro about-par">
          <h2 className="branch-header">Admission Process</h2>
          <p>To get admission in any University of Ukraine there are three steps: </p>
          <h3 className="branch">STEP 1: HOW TO GET THE INVITATION LETTER</h3>
          <p>To get an invitation letter from any University of Ukraine we require the following documents:</p>
          <ul>
            <li>Copy of International passport</li>
            <li>Copy of High School Certificate</li>
            <li>Copy of Bachelor’s Degree (if the student is applying for Master’s degree)</li>
            <li>Invitation charges 400 US$</li>
            <li>Courier Charges 100 US$</li>
          </ul>
          <p>
            You can send us the documents by email or by viber/whatsapp <br />
            You can transfer payment to us by western Union or moneygram. <br /> <br />
            After receiving the documents and payment. we shall send you the invitation letter,admission letter and visa support letter by courier.</p>
          <h3 className="branch">STEP 2: VISA</h3>
          <p>After getting the invitation letter, students should contact the nearest Ukrainian Embassy or Consulate. <br /> <br />
            Student should apply to Ukrainian Embassy with the following documents :</p>
          <ul>
            <li>Original Invitation letter</li>
            <li>Original international passport (valid for one year at least)</li>
            <li>Completed and signed Visa Application form</li>
            <li>Original of school-leaving certificate of secondary school (college) record with enclosed statement of results (transcript of marks received) and their copies legalized by the Ministry of Foreign Affairs of issuing country and its translation into Ukrainian language;</li>
            <li>Original of birth certificate and a copy legalized by the Ministry of Foreign Affairs of issuing country and its translation into Ukrainian language;</li>
            <li>Medical Certificate showing absence of Aids/HIV (translated into the Ukrainian language)</li>
            <li>Medical certificate of general fitness legalized by the Ministry of Foreign Affairs of issuing countryand its translation into Ukrainian language. Medical certificate is valid for TWO MONTHS, which means an applicant has to enrol to his/her institution within two months since medical certificate was issued;</li>
            <li>One coloured photo 35 mm x 45 mm</li>
          </ul>
          <h3 className="branch">STEP 3: ARRIVAL</h3>
          <p>After getting visa from Ukrainian Embassy or Consulate, students should inform us about his/her flight details with date and arrival time. One of our representatives shall receive the student at the airport. In case student does not inform us about his/her arrival, he/she will be deported back to homeland.</p>
        </div>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  )
}


export default Admission