import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const VisaAndArrival = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Visa And Arrival</h1>
        </div>
      </div>
      <div className="container">
        <div className="doc-req about-par">
          <h2 className="branch-header">Documents required for visa</h2>
          <ul>
            <li>Filled Visa Application Form</li>
            <li>International Passport (valid not less than one year)</li>
            <li>Original Invitation Letter from University through UHECAS</li>
            <li>Birth Certificate (should be with Apostille stamp or legalized by the Ministry of Foreign affairs and translated
            into Ukrainian language)</li>
            <li>Original School Certificates (O level/ SSCE/ HSSC , Bachelor or Master’s Degree if available) (should be with
            Apostille stamp or legalized by the Ministry of Foreign Affairs and translated into Ukrainian language)</li>
            <li>General Medical Fitness Certificate (should be with Apostille stamp or legalized by the Ministry of Foreign
            Affairs and translated into Ukrainian language)</li>
            <li>Letter of approval from Education Ministry (For West Africa Nigeria )</li>
            <li>General Health- Medical Certificate issued at least two months prior the entrance in to Ukraine
              .&nbsp;Translated into Ukrainian and legalized by Notary Public or Ukrainian Embassy (Must be legalized by Health
            Ministry for West Africa , Nigeria )</li>
            <li>Medical Certificate showing absence of Aids/HIV (should be with Apostille stamp or legalized by the Ministry of
            Foreign affairs and translated into Ukrainian language)</li>
            <li>Health Insurance covering one year/ for some countries only for Traveling period</li>
            <li>Sponsorship Letter from the Parents/Person who is going to bear the expenses for student during stay/ studying
            in Ukraine . (It is not a condition for all Nationalities)</li>
            <li>Bank Statement to prove financial ability. (It is not a condition for all Nationalities)</li>
            <li>8 passport size photos (3.5 x 4.5)</li>
            <li>To and Fro Air ticket valid for one year.</li>
            <li>Visa Confirmation letter sent to the Embassy from Ministry of Foreign Affairs of Ukraine</li>
            <li>The student needs to check with Ukrainian Embassy in his/ her country of permanent/ temporary stay. Ukrainian
            Embassy does not require Russian/ Ukrainian translation for some Nationalities.</li>
          </ul>
        </div>

        <hr />
        <br />

        <div className="airport about-par">
          <h2 className="branch-header">Airport Pickup</h2>
          <p>We always receive our all students at the airports of Ukraine and we shall make arrangement of transportation from
            airport to University. It is advisable to book all flights as soon as possible because the beginning of the academic
          year is a busy time to travel in Ukraine.</p>
          <p>It is compulsory for every student to inform us about his/her flight details because if our representative will not
          be at the airport to receive student, student shall be deported back to homeland.</p>
          <p>Students who got their Ukraine visa has to inform us about their arrival details, so that Shams for Study
          representative can receive the students at the airport. Please send us the scan copy of the booked ticket.</p>
        </div>

    </div>
    <MoreInfo />
    <Footer />
    </div>
  )
}


export default VisaAndArrival