import React from 'react';

const StudySection = () => {
  return (
    <div>
      <div className="study-in-uk">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 text-center">
              <h2>Study In <span>Ukraine</span></h2>
              <p className="study-p">The <strong>study in Ukraine</strong> offers you new horizons in your life. You can now specialize in more than <strong> 400 </strong>fields and languages, without any conditions or complications. <strong> Gifton-Ua </strong> offers several benefits and guarantees from health insurance, housing and others. Join now more than <strong> 1,500 </strong> students who are honored to serve them.</p>
              <a href="studyInUkraine.html"><button type="button" className="btn read-more">Read More <i className="fas fa-angle-double-right"></i></button> </a>
            </div>
            <div className="col-lg-4 col-md-5">
              <img src="imgs/girl-grad.jpg" className="img-fluid img-if" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default StudySection