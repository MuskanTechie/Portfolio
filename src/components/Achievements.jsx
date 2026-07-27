import "./Achievements.css";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine
} from "react-icons/fa";


function Achievements() {
  return (
    <section id="achievements" className="achievements" data-aos="fade-up">


      <h1 className="section-title">
        Achievements
      </h1>


      <p className="section-subtitle">
        Highlights of my learning journey, projects, and technical growth.
      </p>



      <div className="achievement-container">



      



        <div className="achievement-card">

          <div className="achievement-icon">
            <FaLaptopCode />
          </div>


          <h2>
            Full Stack Development Course
          </h2>


          <p>
           Completed Full Stack Web Development Course from National Vocational
  and Technical Training Commission (NAVTTC). The course was completed
  from March 2025 to June 2025 and covered HTML, CSS, JavaScript,
  Bootstrap, and React.js.
          </p>

        </div>


 <div className="achievement-card" data-aos="zoom-in">

          <div className="achievement-icon">
            <FaGraduationCap />
          </div>


          <h2>
            Academic Projects
          </h2>


          <p>
            Successfully developed multiple software projects including
            web applications, database systems, and interactive applications
            as part of my Computer Science journey.
          </p>

        </div>


        <div className="achievement-card">

          <div className="achievement-icon">
            <FaChartLine />
          </div>


          <h2>
            Continuous Learning
          </h2>


          <p>
            Continuously improving programming skills by exploring new
            technologies, solving problems, and working on real-world projects.
          </p>

        </div>



      </div>


    </section>
  );
}

export default Achievements;