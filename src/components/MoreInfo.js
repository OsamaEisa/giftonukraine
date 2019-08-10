import React from 'react'
import { Link } from "react-router-dom";

const MoreInfo = () => {
  return (
    <div>
      <div className="for-more-info for-more">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-10 col-xs-12">
              <p className="lead more-info">For more information ?</p>
            </div>
            <div className="col-md-4 col-xl-2 col-xs-12">
              <Link to="/contact"><button type="button" className="btn btn-lg contact">Contact us <i className="fas fa-angle-double-right"></i></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MoreInfo