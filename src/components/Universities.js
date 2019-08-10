import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MoreInfo from './MoreInfo'

const Universities = () => {
  return (
    <div>
      <Navbar />
      <button className="btn" id="scroll" style={{display:'none'}} ><span></span></button>
      <div className="general-layout">
        <div className="container">
          <h1>Universities</h1>
        </div>
      </div>
      <div className="container">
      <div className="medical">
        <h2 className="branch-header">Medical Universities</h2>
        <div className="row padding">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/bogomolets-medical.jpg" />
              <div className="card-body">
                <h4 className="card-title">Bogomolets National Medical University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div> 
          </div> 
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/slide-1.jpg" />
              <div className="card-body">
                <h4 className="card-title">Taras Shevchenko National University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div> 
          </div> 
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/kmu.jpg" />
              <div className="card-body">
                <h4 className="card-title">Kyiv Medical University </h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div> 
          </div> 
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/kiu.png" />
              <div className="card-body">
                <h4 className="card-title">Kyiv International University </h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div> 
          </div> 
            <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/sumy.jpg" />
              <div className="card-body">
                <h4 className="card-title">Sumy State University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Sumy City</p>
              </div>
            </div> 
            </div> 
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="imgs/Polt.jpg" />
                <div className="card-body">
                  <h4 className="card-title">Ukrainian Medical stomatological academy</h4>
                  <p className="card-text"><i className="fas fa-map-marker-alt"></i> Poltava City</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">            
            <div className="card">
              <img className="card-img-top" src="imgs/karazin.jpg" />
              <div className="card-body">
                <h4 className="card-title">Karazin Kharkiv National University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kharkiv City</p>
              </div>
            </div> 
          </div> 
          <div className="col-md-4">            
            <div className="card">
              <img className="card-img-top" src="imgs/lugansk.jpg" />
              <div className="card-body">
                <h4 className="card-title">Lugansk State Medical University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Rubizhne City</p>
              </div>
            </div> 
        </div>
        <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/lviv.jpg" />
              <div className="card-body">
                <h4 className="card-title">Lviv Medical University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Lviv City</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="imgs/Uzhhorod-National.jpg" />
            <div className="card-body">
              <h4 className="card-title">Uzhhorod National University</h4>
              <p className="card-text"><i className="fas fa-map-marker-alt"></i> Uzhhorod City</p>
          </div>
        </div>
      </div> 
      </div>

      <div className="engineering">
        <h2 className="branch-header">Engineering & Business Universities</h2>
        <div className="row padding">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/polytechnic.jpg" />
              <div className="card-body">
                <h4 className="card-title">Kyiv Polytechnic Institute</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/ntional-aviation.png" />
              <div className="card-body">
                <h4 className="card-title">National Aviation University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/kharkivploy.jpg" />
              <div className="card-body">
                <h4 className="card-title">Kharkiv Polytechnic Institute</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kharkiv City</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/university_nobel.jpg" />
              <div className="card-body">
                <h4 className="card-title">Alfred Nobel University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Dnipro City</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/lviv-poly.jpg" />
              <div className="card-body">
                <h4 className="card-title">Lviv Polytechnic National University</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Lviv City</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="imgs/kc.jpg" />
              <div className="card-body">
                <h4 className="card-title">National University of Civil and Architecture</h4>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="imgs/krok.jpg" />
                <div className="card-body">
                  <h4 className="card-title">Krok University</h4>
                  <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src="imgs/American.jpg" />
                  <div className="card-body">
                    <h4 className="card-title">Ukrainian-American University</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt"></i> Kyiv City</p>
                  </div>
                </div>
              </div>
        </div>
      </div>
      </div>
    </div>
    <MoreInfo />
    <Footer />
    </div>
  )
}


export default Universities