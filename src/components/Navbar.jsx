import "./Navbar.css";

import { 
  FaBars,
  FaTimes,
  FaDownload
} from "react-icons/fa";

import { useState } from "react";


function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="navbar">


      <h2 className="logo">
        Muskan Fatima
      </h2>



      <div 
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >

        {open ? <FaTimes /> : <FaBars />}

      </div>



      <ul className={open ? "nav-links active" : "nav-links"}>


        <li>
          <a href="#home">Home</a>
        </li>


        <li>
          <a href="#about">About</a>
        </li>


        <li>
          <a href="#projects">Projects</a>
        </li>


        <li>
          <a href="#skills">Skills</a>
        </li>


        <li>
          <a href="#experience">Experience</a>
        </li>


        <li>
          <a href="#contact">Contact</a>
        </li>



        <li>

          <a 
            href="/Muskan-Fatima-Resume.pdf"
            className="cv-btn"
            download
          >

            <FaDownload />
            Download Resume

          </a>

        </li>




      </ul>


    </nav>

  );
}


export default Navbar;