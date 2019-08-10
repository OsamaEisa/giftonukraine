import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const whyUkraine = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Why To Study In Ukraine!</h1>
        </div>
      </div>
      <div className="container">
        <div className="why-study about-par">
          <h2 className="branch-header">Why to study in Ukraine</h2>
          <ul>
            <li>Quality Education FOR ALL INTERNATIONAL STUDENTS IN THE ENGLISH LANGUAGE</li>
            <li>Globally Recognized Courses (Europe, UK, USA, Asia, Africa, WHO, UNESCO, EUROPEAN COUNCIL, etc.)</li>
            <li>Medical degree recognized by WHO, UNESCO, PLAB(UK), USMLE(USA), other Various International Organizations and
            throughout EU</li>
            <li>No Entry Test</li>
            <li>No IELTS or TOEFL required</li>
            <li>Tuition fee paid on arrival</li>
            <li>Cost effective (cheapest European education)</li>
            <li>Medical range from 3500$ - 5000$</li>
            <li>Engineering range from 2000$ - 3500$</li>
            <li>European Life Standard</li>
            <li>Worldwide Acceptance of Ukrainian Method of Teaching</li>
            <li>English Medium of Instruction</li>
            <li>Better Job Prospects</li>
            <li>Emphasis on Practical Aspects in Teaching</li>
            <li>Moderate Climate around the year</li>
            <li>Outstanding International</li>
            <li>Faculty One of the Best Transportation systems in Europe</li>
            <li>International Students get approximately 30%~ 50% discounts on travel</li>
            <li>Enrichment of Experience through Visiting Professors from the USA, CANADA , UK , etc.</li>
            <li>Participation of Students in Seminars/Symposia/Project Work, etc. in other European cities-countries</li>
            <li>Chances of Permanent Residence &amp; Settlement in Europe after completion of study program</li>
            <li>Bilateral Student Exchange Program with Universities in Germany , Sweden , Finland , Czech Republic, Canada,
            Austria, Russia, Romania etc.</li>
            <li>Three Months’ Summer Jobs during vacation in countries i.e. U.K. , SWEDEN and other E.U. countries</li>
          </ul>
        </div>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  )
}


export default whyUkraine