import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const Requirements = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Admission Requirements</h1>
        </div>
      </div>
      <div className="container">
        <div className="req about-par">
          <h2 className="branch-header">Requirements</h2>
          <p>The validity of Passport should not be less than for 1 year Educational Documents (O level/ SSCE/ HSSC, Bachelor or Master Degree if available). </p>
          <p><strong>The E-mail with scans of above mentioned documents should contain following information respectively</strong></p>
          <ul>
            <li>Name, Middle name and Surname</li>
            <li>Nationality</li>
            <li>Date &amp; place of birth</li>
            <li>Gender</li>
            <li>Passport number</li>
            <li>Passport validity (date of issue &amp; expiry)</li>
            <li>Permanent address</li>
            <li>Temporary address/ Current address (if different from permanent address)</li>
          </ul>
          <h3 className="branch">Admission Schedule</h3>
          <p>Ukrainian Universities start to issue “Invitation Letter” from March/ April every year.</p>
          <p>We accept Applications for Study in Ukrainian Universities the whole year round. We secure “Invitation Letters” for students who apply through us earlier and issue their “Invitation Letters” from chosen/ recommended Universities respectively. The Universities keep issuing the “Invitation Letters” letters from March/ April to November (mostly extended to January). After March/ April, it takes about 3 working days to issue an “Invitation to Study” letter from a chosen/ recommended University.</p>
          <p><em>* Fast courier service “TNT”, “DHL”, “FedEx” or EMS deliver the “Invitation to Study” Letter within 4 to 5 working days. The cost of courier service is 100$US.</em></p>
          <p>The classNamees start from 1st September. Foreign students are allowed to join their English Medium Programmes until 1st of November. Also, students can join first course in&nbsp; winter intake which lasts till 1<sup>st</sup> of March. Students arriving after 1st of November or 1st of March can join Preparatory Programme only.</p>
          <p>The students should always provide their valid postal address &amp; contact numbers on Application form.</p>
          <p><strong>Upon Receiving Invitation letter</strong></p>
          <p>The student should contact Ukrainian embassy in his / her country in order to apply for the study visa. Ukrainian embassy starts accepting Student Visa Applications and issue Student Visa from May/ June.</p>
          <p>Following documents should be submitted in <a href="http://mfa.gov.ua/en/about-mfa/abroad/embassies" target="_blank" rel="noopener">Ukraine Embassy</a> to obtain a Student Visa,</p>
          <h3 className="branch">Documents required on Arrival:</h3>
          <p>Recommended International Airports in Ukraine : Kyiv (Boryspol airport), Dnepropetrovsk, Odessa and Kharkiv.</p>
          <p>The student must be sure of bringing all Payments and Documents mentioned below otherwise Ukrainian Immigration Authority can refuse him/ her Entry and DEPORT back to his/ her country The student must bring full Tuition fee, accommodation fee and other charges (cash) mentioned in Courses &amp; Costs for chosen programme/ university. The student is questioned by airport Immigration Authorities about Tuition fee and other charges. The student must bring some extra money for personal keep up. Please visit Living Cost for more information.</p>
          <p>The list of required documents to bring upon arrival:</p>
          <ul>
            <li>Internationall Passport/ Traveling document with Ukrainian Visa on it (valid -not less than one year)</li>
            <li>Original Invitation Letter of the University</li>
            <li>Birth Certificate and its notarized translation into Ukrainian language. (In case of absence of notarized translation of the document, it can be performed in Ukraine)</li>
            <li>Original School Certificates ( O level/ SSCE/ HSSC, Bachelor’s or Master Degree if available) and its notarized translation into Ukrainian language. (In case of absence of notarized translation of the document, it can be performed in Ukraine)</li>
            <li>General Health-Medical Certificate issued at least two months prior the entrance into Ukraine and its notarized translation into Ukrainian language. (In case of absence of notarized translation of the document, it can be performed in Ukraine)</li>
            <li>HIV- AIDS Negative Certificate issued at least two months prior the entrance and its notarized translation into Ukrainian language. (In case of absence of notarized translation of the document, it can be performed in Ukraine)</li>
            <li>Health Insurance covering one year/ for some countries only for Traveling period</li>
            <li>Sponsorship Letter from the Parents/Person who is going to bear the expenses for student during stay/ studying in Ukraine . (It is not a condition for all Nationalities)</li>
            <li>Bank Statement to prove financial ability. (It is not a condition for all Nationalities)</li>
            <li>one coloured photo 35 mm x 45 mm</li>
            <li>Air Ticket valid for one year, must be To and Fro</li>
            <li>Migration card must be filled in by student on arrival to Ukraine and kept saved during stay in Ukraine.</li>
            <li>The student must present it to Immigration Authorities when returning home or travelling out of the country.</li>
          </ul>
      </div>
    </div>
    <MoreInfo />
    <Footer />
    </div>
  )
}


export default Requirements