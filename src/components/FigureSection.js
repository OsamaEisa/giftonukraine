import React from 'react';

const FigureSection = () => {
  return (
    <div>
      <figure>
        <div className="fixed-wrap text-center">
          <div className="data">
            <div className="container">
              <div className="fixed">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="cont">
                      <i className="fa fa-users fa-4x"></i>
                      <p>1,500</p>
                      <span>Students</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="cont">
                      <i className="fas fa-university fa-4x"></i>
                      <p>120</p>
                      <span>Universities</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="cont">
                      <i className="fas fa-layer-group fa-4x"></i>
                      <p>200</p>
                      <span>Specializations</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="cont">
                      <i className="fas fa-thumbs-up fa-4x"></i>
                      <p>100%</p>
                      <span>Satisfied Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  )
}


export default FigureSection