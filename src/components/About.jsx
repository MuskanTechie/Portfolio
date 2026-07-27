import "./About.css";

import {
  FaGraduationCap,
  FaCode,
  FaRocket
} from "react-icons/fa";


function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">


      <div className="about-container">


        <div className="about-content">


          <h1>
            About Me
          </h1>


          <p>
      I am a BSCS student at Lahore College for Women University (LCWU) with a strong interest in Full Stack Web Development. I have practical experience in developing modern web applications through my Full Stack Development internship.
          </p>


          <p>
            I enjoy building responsive, user-friendly, and scalable software
            solutions using modern technologies. I continuously improve my
            development skills by working on real-world projects and exploring
            new technologies.
          </p>



          <div className="about-details">



            <div className="detail-box">


              <div className="detail-icon">
                <FaGraduationCap />
              </div>


              <h3>
                Education
              </h3>


              <p>
                BS Computer Science (BSCS)
              </p>


            </div>





            <div className="detail-box">


              <div className="detail-icon">
                <FaCode />
              </div>


              <h3>
                Skills
              </h3>


              <p>
                React.js, JavaScript, MERN Stack, UI/UX
              </p>


            </div>





            <div className="detail-box">


              <div className="detail-icon">
                <FaRocket />
              </div>


              <h3>
                Goal
              </h3>


              <p>
                To build innovative software solutions and grow as a professional developer.
              </p>


            </div>



          </div>


        </div>


      </div>


    </section>
  );
}

export default About;