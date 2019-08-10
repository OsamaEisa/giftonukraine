import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const Transfer = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Transfer Program</h1>
        </div>
      </div>
      <div className="container about-par">
        <h3 className="branch text-center mb-4">Transfer</h3>

        <p>Students with transfer credit who apply for Study in Ukraine must submit the following upon arrival as original: </p>
        <ul>
          <li>Official academic transcripts from previously attended colleges and universities </li>
          <li>School Certificates</li>
          <li>International Passport (traveling document)</li>
        </ul>
        <p>These documents are submitted to Ministry of Education, Ukraine for Certification, to Calculate the Academic Difference, and the Credit hours. If Ministry of Education finds the previous qualification equal to Ukrainian syllabus and curricula, the student receives approval certificate to join desired year successfully, otherwise, the candidate must follow to the recommendations set by Ministry of Education. </p>
        <p>1 Applicants should scan their transcripts by email and must produce originals attested by Foreign Ministry of their country and legalized by Embassy of Ukraine. Universities in Ukraine accept qualified transfer students from other universities. Universities in Ukraine operate on the semester system. Admission is based on student's overall academic record.</p>
        <p>Some programs are very competitive and the requirements for consideration will likely be higher.</p>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  )
}


export default Transfer