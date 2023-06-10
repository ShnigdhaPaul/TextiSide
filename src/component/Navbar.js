import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    
  <nav className={`navbar navbar-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <div className={`from-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
  <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"/>
  <label className="stom-control-label mx-2 "  htmlFor="customSwitch1">Enable Dark Mode</label>
</div>
  <a className="navbar-brand" href="/">{props.title}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/About">{props.about}</a>
        </li>
      
      </ul>
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      
    </form>

    </div>
    </div>

    
  </nav>  
  )
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}
