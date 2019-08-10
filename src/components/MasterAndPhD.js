import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const MasterAndPhD = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Master & PhD</h1>
        </div>
      </div>
      <div className="container">
        <h2 className="branch-header">Post Graduate</h2>
        <p className="about-par">The students wishing to continue their education at Post Graduate/Master's or Ph.D. level can
        contact anytime around the year i.e. without awaiting major intake of September</p>
        <p className="about-par">Embassies of Ukraine accept documents of PG/ Master's or Ph.D. level students all the year and
        grant a visa to deserving students.</p>
        <p className="about-par">The students can continue their PG/ Master's or Ph.D. level in all programs like Medicine,
        Engineering, Aviation, Economics, Management, Administration and many more programs available at Bachelor Level.</p>
        <p>The study is conducted mostly in <strong>Russian</strong>, <strong>Ukrainian</strong> or in <strong>English</strong> medium.</p>
        <p><strong>Requirements:</strong></p>
        <p>Kindly forward us high quality clear scanned copies of following documents, in reply to this email. </p>
        <ul>
          <li>Filled Application Form (with valid permanent/ current postal address and telephone numbers)</li>
          <li>International Passport, the page with picture and data on it (traveling document)</li>
          <li>Educational Documents available ( Certificate of O level/A level /SSCE/ HSSCE/Bachelor/ Masters)</li>
        </ul>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  )
}


export default MasterAndPhD