import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'


const About = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>About us</h1>
        </div>
      </div>
      <div className="container">
      <h2 className="branch-header">Who we are!</h2>
      <p className="about-par"><strong>Gifton-Ua</strong> is a cooperation platform in Ukraine that promotes the possibilities of studying for international students…</p>
      <p className="about-par">If you are hunting for colleges and universities in English in Europe, to move to your next phase in education, then “Study in Ukraine” is said to be the ideal platform of more than 200 universities and colleges in the country aiming to offer economical access to international study for a diverse learner’s population. In this platform learners obtain intercultural competence via integration right into their culture and institution while discovering their entire dimension of their educational field.</p>
      <p className="about-par">Search no more, by opting for your further study in Ukraine you will find that this is your chance to move forward and will impress your upcoming bosses, as they can see you are not simply following the crowd if you enhance your education. “Study in Ukraine” has superb reviews with the admission application procedure as it is both understandable and easy, we are here with you in every step you make.</p>
    </div>
    <MoreInfo />
    <Footer />
    </div>
    )
}


export default About