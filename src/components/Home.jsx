import "./Home.css";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section id="home" className="home" data-aos="fade-up">

      <div className="home-container">

        <div className="home-content">

          <p className="intro">
            Hello, I'm
          </p>

          <h1>
            Muskan Fatima
          </h1>

         <h2>
  <ReactTyped
    strings={[
      "Full Stack Developer",
      "MERN Stack Developer"
    ]}
    typeSpeed={80}
    backSpeed={50}
    loop
  />
</h2>

          
          <p className="description">
            I am a Computer Science student and Full Stack Developer with hands-on internship experience. I build responsive and user-friendly web applications using React.js, Node.js, Express.js, and MongoDB.
          </p>


          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

        </div>


        <div className="home-image">

          <img 
            src="/profile.png" 
            alt="Profile"
          />

        </div>


      </div>

    </section>
  );
}

export default Home;