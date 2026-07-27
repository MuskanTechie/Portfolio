import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">

      <h1 className="section-title">
        Experience
      </h1>


      <p className="section-subtitle">
        My professional journey and practical development experience.
      </p>


      <div className="experience-card" data-aos="zoom-in">


        <span className="experience-badge">
  <FaBriefcase />
  Internship Experience
</span>

        <h2>
          MERN Stack Developer Intern
        </h2>


        <p className="duration">
          Full Stack Web Development Internship
        </p>


        <p className="experience-description">
          Worked as a MERN Stack Developer Intern at DeveloperHub Corporation (Remote)  , gaining hands-on experience
          in building modern web applications using React.js, Node.js,
          Express.js, and MongoDB. Developed responsive interfaces and
          integrated frontend with backend services.
        </p>



        <h3>
          Responsibilities
        </h3>


        <ul className="responsibilities">

          <li>
            Developing responsive user interfaces using React.js
          </li>

          <li>
            Creating reusable components and maintaining clean code structure
          </li>

          <li>
            Integrating REST APIs with frontend applications
          </li>

          <li>
            Debugging issues and improving application performance
          </li>

        </ul>



        <h3>
          Technologies Used
        </h3>


        <div className="experience-tags">

          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>JavaScript</span>

        </div>


      </div>


    </section>
  );
}

export default Experience;