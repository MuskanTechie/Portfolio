import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills" data-aos="fade-up">

      <h1 className="section-title">My Skills</h1>

      <p className="section-subtitle">
        Technologies and tools I use to build responsive and modern web applications.
      </p>

      <div className="skills-container">

        {/* Frontend */}

        <div className="skill-card" data-aos="zoom-in">

          <FaReact className="skill-icon" />

          <h2>Frontend</h2>

          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><FaReact /> React.js</li>
          </ul>

        </div>


        {/* Backend */}

        <div className="skill-card">

          <FaNodeJs className="skill-icon" />

          <h2>Backend</h2>

          <ul>
            <li><FaNodeJs /> Node.js</li>
            <li><SiExpress /> Express.js</li>
          </ul>

        </div>


        {/* Database */}

        <div className="skill-card">

          <FaDatabase className="skill-icon" />

          <h2>Database</h2>

          <ul>
            <li><SiMongodb /> MongoDB</li>
            <li><FaDatabase /> SQL / MySQL</li>
          </ul>

        </div>


        {/* Tools */}

        <div className="skill-card">

          <FaTools className="skill-icon" />

          <h2>Tools</h2>

          <ul>
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li>💻 VS Code</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Skills;