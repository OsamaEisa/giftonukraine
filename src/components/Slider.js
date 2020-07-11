import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

const Slider = () => {

  return (
      <div className="slider">
      <div id="main-slider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#main-slider" data-slide-to="0" className="active"></li>
          <li data-target="#main-slider" data-slide-to="1"></li>
          <li data-target="#main-slider" data-slide-to="2"></li>
          <li data-target="#main-slider" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item slider-1 active">
              <Navbar/>
              <div className="carousel-caption">
                <h1 className="car-h1">session <span>2020 - 2021</span> <br /> is open now!</h1>
                <h3>Book Your Seat...</h3>
                <Link to="/contact"><button type="button" className="btn apply-now btn-lg">APPLY NOW</button></Link>
              </div>
            </div>
            <div className="carousel-item slider-2">
            <Navbar/>
              <div className="carousel-caption">
                <h1 className="car-h2">make your dreams real!</h1>
                <h3>All Specialities Are Available</h3>
              </div>
            </div>
            <div className="carousel-item slider-4">
            <Navbar/>
            <div className="carousel-caption">
              <h1 className="car-h3">Odessa National Maritime University</h1>
              <h3>One of The Best Maritime Universities in The World</h3>
              <Link to="/contact"><button type="button" className="btn btn-lg find-more">Apply Now</button></Link>
            </div>
          </div>
            <div className="carousel-item slider-3">
            <Navbar/>
              <div className="carousel-caption">
                <h1 className="car-h3">why to choose ukraine?</h1>
                <h3>No IELTS, European Life ...</h3>
                <Link to="/whyukraine"><button type="button" className="btn btn-lg find-more">Find More</button></Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )

}

export default Slider