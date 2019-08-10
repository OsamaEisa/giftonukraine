import React from 'react';
import {Link} from 'react-router-dom'

const UkraineSection = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="container text-center">
          <h1 className="branch-header uk-h1">Ukraine</h1>
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Link to="/studyinukraine">
                <i className="fas fa-university"></i>
                <h3>Study in Ukraine</h3>
                <p>The system of education provides good quality ...</p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Link to="/liveinukraine">
                <i className="fas fa-home"></i>
                <h3>Living in Ukraine</h3>
                <p>Accommodation in Ukraine is Cheaper according to ...</p>
              </Link>
            </div>
            <div className="col-xs-12 col-md-4">
              <Link to="/whyukraine">
                <i className="fas fa-question-circle"></i>
                <h3>Why to study in Ukraine</h3>
                <p>No IELTS or TOEFL is required, Cost effective cheapest ...</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default UkraineSection
