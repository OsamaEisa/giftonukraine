import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container">
        <img src="../imgs/logo-edit-1111.png" alt="LOGO" width="135px" height="100px" />
        <Link to="/" className="navbar-brand logo">
          Gifton-Ua <br /> <span>study in ukraine</span>
        </Link>
        {/* <a href="index.html" className="navbar-brand logo">Gifton-Ua <br /> <span>study in ukraine</span></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRes">
          <span><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarRes">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"> <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="#">Living & Study</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/studyinukraine">Study in Ukraine</Link>
                <Link className="dropdown-item" to="/liveinukraine">Live in Ukraine</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/whyukraine">Why Ukraine!</Link>
              </div>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/universities">Universities</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">Admission</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/admission">Admission Process</Link>
                <Link className="dropdown-item" to="/requirements">Requirements</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/transfer">Transfer</Link>
                <Link className="dropdown-item" to="/master&phd">Master&PhD</Link>
              </div>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/visa&arrival">Visa & Arrival</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    
    )
}


export default Navbar