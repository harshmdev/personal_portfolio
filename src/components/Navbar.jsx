import React from "react"

function Navbar(){
    return (
        <nav className="navbar">
          <h1 className="navbar-brand">
            <span>
                Harsh M
            </span>
            <span>
                Jarodiya
            </span> 
          </h1>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="index.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="projects.html" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="resume.html" className="nav-link">Resume</a>
            </li>
            <li className="nav-item">
              <a href="certificates.html" className="nav-link">Certificates</a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      );

}

export default Navbar