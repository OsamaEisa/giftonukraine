import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>Gifton Ua</h3>
            <hr className="light" />
            <p><i className="fas fa-phone-alt"></i> +380 63 73 201 53</p>
            <p><i className="far fa-envelope"></i> gifton.ukraine@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> kyiv, Ukraine</p>
          </div>
          <div className="col-md-4">
            <hr className="light" />
            <h5>Our Hours</h5>
            <hr className="light" />
            <p><i className="far fa-clock"></i> 24 hours</p>
            <p><i className="far fa-calendar-alt"></i> 7 days</p>
          </div>
          <div className="col-md-4">
            <hr className="light" />
            <h5>Service Areas</h5>
            <hr className="light" />
            <p><i className="fas fa-map-marker-alt"></i> Kyiv</p>
            <p><i className="fas fa-map-marker-alt"></i> Kharkiv</p>
            <p><i className="fas fa-map-marker-alt"></i> Sumy</p>
            <p><i className="fas fa-map-marker-alt"></i> Rubizhne</p>
            <p><i className="fas fa-map-marker-alt"></i> Lviv</p>
          </div>
          <div className="col-12">
            <hr className="light-100" />
            <h5>&copy; <a href="https://github.com/OsamaEisa" target="_blank">Osama Eisa</a></h5>
          </div>
        </div>
      </div>
    </footer>
  </div>

    )
}

export default Footer
