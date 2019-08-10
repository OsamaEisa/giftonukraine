import React from 'react';

import Jumbotron from './Jumbotron';
import Slider from './Slider';
import StudySection from './StudySection';
import UkraineSection from './UkraineSection';
import FigureSection from './FigureSection';
import ReklamaSection from './ReklamaSection';
import OurWorkSection from './OurWorkSection';
import Footer from './Footer';


const Home = () => {
    return (
      <div>
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
        <Jumbotron />
        <Slider />
        <StudySection />
        <UkraineSection />
        <FigureSection />
        <ReklamaSection />
        <OurWorkSection />
        <Footer />
      </div>
    )

}


export default Home