import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron info align-items-center">
      <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 col-xs-12">
              <p><i className="far fa-envelope"></i> gifton.ukraine@gmail.com</p>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <p> <i className="fas fa-phone-alt"></i> Whatsapp & Viber / +380 63 73 201 53</p>
            </div>
            
            <div className="col-lg-2 col-md-12 col-xs-12">
              <p><i className="fas fa-map-marker-alt"></i> Kyiv, Ukraine</p>
            </div>
            </div>
      </div>
    </div>
  )
}


export default Jumbotron