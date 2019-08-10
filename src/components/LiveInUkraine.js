import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const LiveInUkraine = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Live in Ukraine</h1>
        </div>
      </div>
      <div className="container about-par">
        <h3 className="branch text-center mb-4">Accommodation</h3>
        <p>Accommodation in Ukraine is Cheaper according to other European States, prices varies according to your own priorities, it is totally up to your choice and demand what you like and what makes you comfort. Normally, we recommend living in hostel for the new coming students, why?</p>
        <p className="font-weight-bold">Because;</p>
        <p>They don’t know communicative language with locals</p>
        <p>They don’t know the city bus roots outside the university campus</p>
        <p>We help the student all the way long but if they live outside the university campus we can’t approach to them, so it is difficult to help them.</p>
        <p>Hostel is the best place to meet new people, gaining new experience and making new friends which lives for life.</p>
        <h4 className="font-weight-bold">UNIVERSITY ACCOMMODATION</h4>
        <p>Cheap and good option for the new coming students, provided by the University</p>
        <p>Two types of hostels according to Facilities:</p>
        <p>1)Excellent Renovation (includes all necessary facilities to live comfortable)<br />
          In Double person’s room: One place charges – 1200 USD</p>
        <p>In Three person’s room: One place charges – 1000 USD</p>
        <p>2)Ordinary Renovation (includes only basic facilities)<br/>
          In Double person’s room: One place charges – 600 USD</p>
        <p>In Three person’s room: One place charges – 500 USD</p>
        <h4 className="font-weight-bold mb-3">PRIVATE ACCOMMODATION</h4>
        <p>Students who are interested to live outside the university area can go for this option</p>
        <p>Apartment’s charges are categorized according to their space, condition and place,</p>
        <p className="font-weight-bold">Like:</p>
        <p>Single room’s Apartment: Ordinary Renovation 150-200 USD</p>
        <p>Euro Renovation 250-300 USD</p>
        <p>Two room’s Apartment: Ordinary Renovation 200-300 USD</p>
        <p>Euro Renovation 350-450 USD</p>
        <p>Three room’s Apartment: Ordinary Renovation 300-400 USD</p>
        <p>Euro Renovation 400-500 USD</p>
    </div>
    <MoreInfo />
    <Footer />
    </div>
  )
}


export default LiveInUkraine