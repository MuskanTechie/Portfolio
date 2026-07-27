import "./Projects.css";
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaStar,
  FaCode
} from "react-icons/fa";


function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">

      <h1 className="section-title">
        Featured Projects
      </h1>

      <p className="section-subtitle">
        A collection of projects showcasing my skills in modern web
        development, responsive design, and software solutions.
      </p>


      <div className="project-container">


        {/* Perfume Project */}

        <div className="project-card" data-aos="zoom-in">


          <div className="project-badge">

            <FaStar />
             Featured Internship Project

          </div>


          <video
            className="project-video"
            autoPlay
            loop
            muted
            playsInline
          >

            <source
              src="/perfume-ecommerce.mp4"
              type="video/mp4"
            />

          </video>


          <h2>
            E-commerce Perfume Website
          </h2>


          <p>
            A modern and responsive perfume e-commerce website developed during
            my internship. It provides an elegant shopping experience with
            attractive product displays, responsive layouts, and a clean,
            user-friendly interface.
          </p>


          <h3 className="feature-title">
            Key Features
          </h3>


          <ul className="project-features">

            <li>✓ Product Listing</li>
            <li>✓ Responsive Design</li>
            <li>✓ Modern UI Design</li>
            <li>✓ User-friendly Interface</li>

          </ul>


          <div className="tech-list">

            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Responsive Design</span>

          </div>



          <div className="project-buttons">

            <a
              href="https://github.com/MuskanTechie/Ecommerce-website"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              <FaGithub />
              View Code
            </a>


            <a
              href="https://ecommerce-website-xi-wine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary-btn"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>


        </div>




        {/* Odoo Project */}


        <div className="project-card">


          <div className="project-badge">

            <FaCode />
             Odoo Development Project

          </div>


          <video
            className="project-video"
            autoPlay
            loop
            muted
            playsInline
          >

            <source
              src="/odoo-real-estate.mp4"
              type="video/mp4"
            />

          </video>


          <h2>
            Odoo Real Estate Management System
          </h2>


          <p>
            A custom Real Estate Management module developed in Odoo.
            The project includes custom models, fields, XML views,
            menus, access rights, and database integration.
          </p>


          <h3 className="feature-title">
            Key Features
          </h3>


          <ul className="project-features">

            <li>✓ Custom Odoo Module</li>
            <li>✓ Property Management</li>
            <li>✓ XML Views</li>
            <li>✓ Access Rights</li>

          </ul>


          <div className="tech-list">

            <span>Python</span>
            <span>Odoo</span>
            <span>PostgreSQL</span>
            <span>XML</span>

          </div>


        </div>


      </div>


    </section>
  );
}

export default Projects;